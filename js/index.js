let currentChannel = 0;
let powerOn = false;

const playbackTimes = {};
const playbackPositions = {};
const tvScreen = document.getElementById("tvScreen");
const videoPlayer = document.getElementById("videoPlayer");
const channelDisplay = document.getElementById("channelDisplay");
const notification = document.getElementById("notification");
const glowingButton = document.getElementById("glowingButton");
const tvGuide = document.getElementById("tvGuide");

const groupedChannels = channels.reduce((acc, channel) => {
  if (!acc[channel.category]) acc[channel.category] = {};
  const subcategory = channel.subcategory || "default";
  if (!acc[channel.category][subcategory]) acc[channel.category][subcategory] = [];
  acc[channel.category][subcategory].push(channel);
  return acc;
}, {});

function displaySubcategories(category) {
  tvGuide.innerHTML = `<h2>${category}</h2>`;
  const subcategories = groupedChannels[category];
  Object.keys(subcategories).forEach(subcategory => {
    const subcategoryItem = document.createElement("div");
    subcategoryItem.classList.add("category-item");
    subcategoryItem.textContent = subcategory === "default" ? "Uncategorized" : subcategory;
    subcategoryItem.addEventListener("click", () => displayChannels(category, subcategory));
    tvGuide.appendChild(subcategoryItem);
  });

  const backButton = document.createElement("div");
  backButton.classList.add("back-button");
  backButton.textContent = "Back to Main";
  backButton.addEventListener("click", populateGuide);
  tvGuide.appendChild(backButton);
}

function displayChannels(category, subcategory) {
  tvGuide.innerHTML = `<h2>${subcategory === "default" ? category : subcategory}</h2>`;
  const uniqueChannels = [...new Set(groupedChannels[category][subcategory].map(ch => ch.channelNumber))];

  const sortedUniqueChannels = uniqueChannels.sort((a, b) => {
    const yearA = groupedChannels[category][subcategory].find(ch => ch.channelNumber === a).releaseYear || 0;
    const yearB = groupedChannels[category][subcategory].find(ch => ch.channelNumber === b).releaseYear || 0;
    return yearA - yearB;
  });

  sortedUniqueChannels.forEach(channelNumber => {
    const channelGroup = groupedChannels[category][subcategory].filter(ch => ch.channelNumber === channelNumber);
    const channelName = channelGroup[0].name.split("Part")[0].trim();
    const description = channelGroup[0].description || "No description available.";
    const duration = channelGroup[0].duration || "Unknown duration";
    const releaseYear = channelGroup[0].releaseYear || "Unknown year";

    const channelItem = document.createElement("div");
    channelItem.classList.add("channel-item");
    channelItem.innerHTML = `
      <strong>${channelName} (Channel ${channelNumber})</strong><br>
      <small>Year: ${releaseYear}</small>
    `;

    channelItem.addEventListener("mouseover", () => {
      showNotification(`Description: ${description} | Duration: ${duration} | Year: ${releaseYear}`);
    });

    channelItem.addEventListener("mouseout", hideNotification);
    channelItem.addEventListener("click", () => playChannelGroup(channelGroup));
    tvGuide.appendChild(channelItem);
  });

  const backButton = document.createElement("div");
  backButton.classList.add("back-button");
  backButton.textContent = "Back to Categories";
  backButton.addEventListener("click", () => displaySubcategories(category));
  tvGuide.appendChild(backButton);
}

function playChannelGroup(channelGroup) {
  let partIndex = 0;

  function playNextPart() {
    if (partIndex < channelGroup.length) {
      const channel = channelGroup[partIndex];
      const channelName = channel.name;
      
      // Save position of the previous part
      if (videoPlayer.src && !videoPlayer.ended) {
        playbackPositions[channelName] = videoPlayer.currentTime;
      }

      videoPlayer.src = channel.source;
      videoPlayer.onended = () => {
        partIndex++;
        playNextPart();
      };
      videoPlayer.play();
    } else {
      showNotification("End of Channel");
    }
  }
  
  playNextPart();
}

function showNotification(message) {
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(hideNotification, 3000);
}

function hideNotification() {
  notification.style.display = "none";
}

function togglePower() {
  powerOn = !powerOn;
  if (powerOn) {
    tvScreen.classList.add("on");
    videoPlayer.classList.add("on");
    glowingButton.classList.add("on");
    channelDisplay.style.display = "block";
    videoPlayer.play();
    showNotification("Power On");
  } else {
    tvScreen.classList.remove("on");
    videoPlayer.classList.remove("on");
    glowingButton.classList.remove("on");
    channelDisplay.style.display = "none";
    videoPlayer.pause();
    showNotification("Power Off");
  }
}

function populateGuide() {
  tvGuide.innerHTML = `<h2>TV Guide</h2>`;

  const categories = [
    { name: "Movies", channels: moviesChannels },
    { name: "Cartoons", channels: cartoonsChannels },
  ];

  categories.forEach(category => {
    const categoryItem = document.createElement("div");
    categoryItem.classList.add("category-item");
    categoryItem.textContent = category.name;

    categoryItem.addEventListener("click", () => displaySubcategories(category.name));
    tvGuide.appendChild(categoryItem);
  });
}

function playStatic(callback) {
  videoPlayer.src = "assets/videos/tv-static.mp4";
  videoPlayer.muted = true;
  channelDisplay.textContent = "Static...";
  videoPlayer.play();

  setTimeout(callback, 2000);
}

function playChannel(channel) {
  if (powerOn) {
    const channelName = channel.name;

    if (videoPlayer.src && !videoPlayer.ended) {
      playbackPositions[channelName] = videoPlayer.currentTime;
    }

    playStatic(() => {
      videoPlayer.src = channel.video;
      const startTime = playbackPositions[channelName] || 0;
      videoPlayer.currentTime = startTime;

      channelDisplay.textContent = `Now Playing: ${channel.name}`;
      videoPlayer.play();
      showNotification(startTime > 0 ? `Resumed: ${channel.name} at ${Math.floor(startTime)}s` : `Playing: ${channel.name}`);
    });
  }
}

document.getElementById("power").addEventListener("click", togglePower);

document.getElementById("channelUp").addEventListener("click", () => {
  if (powerOn) {
    currentChannel = (currentChannel + 1) % channels.length;
    playChannel(channels[currentChannel]);
  }
});

document.getElementById("channelDown").addEventListener("click", () => {
  if (powerOn) {
    currentChannel = (currentChannel - 1 + channels.length) % channels.length;
    playChannel(channels[currentChannel]);
  }
});

document.getElementById("volumeUp").addEventListener("click", () => {
  if (powerOn) {
    videoPlayer.volume = Math.min(videoPlayer.volume + 0.1, 1);
    showNotification(`Volume: ${Math.round(videoPlayer.volume * 10)}`);
  }
});

document.getElementById("volumeDown").addEventListener("click", () => {
  if (powerOn) {
    videoPlayer.volume = Math.max(videoPlayer.volume - 0.1, 0);
    const volumeLevel = Math.round(videoPlayer.volume * 10);
    showNotification(volumeLevel === 0 ? "Mute" : `Volume: ${volumeLevel}`);
  }
});

document.getElementById("menu").addEventListener("click", () => {
  if (powerOn) {
    const previousChannel = currentChannel;
    let randomChannelIndex;

    do {
      randomChannelIndex = Math.floor(Math.random() * channels.length);
    } while (randomChannelIndex === previousChannel);

    currentChannel = randomChannelIndex;
    playChannel(channels[currentChannel]);
    showNotification("Channel Shuffled");
  }
});

populateGuide();
