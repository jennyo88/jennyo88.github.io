const channels = [
  { name: "The Thing (1982)", category: "Movies", video: "https://archive.org/download/the-thing-1982-vhs/The%20Thing%201982%20VHS%20.mp4" },
  { name: "Hocus Pocus (1993)", category: "Movies", video: "https://archive.org/download/hocus-pocus_202312/Hocus%20Pocus.mp4" },
  { name: "Ghostbusters (1985)", category: "Movies", video: "https://archive.org/download/ghostbusters-from-the-original-vhs-release-in-1985/Ghostbusters%20from%20the%20Original%20VHS%20Release%20in%201985.ia.mp4" }
  // Add other channels here
];

let currentChannel = 0;
let powerOn = false;
const tvScreen = document.getElementById("tvScreen");
const videoPlayer = document.getElementById("videoPlayer");
const channelDisplay = document.getElementById("channelDisplay");
const notification = document.getElementById("notification");
const glowingButton = document.getElementById("glowingButton");
const tvGuide = document.getElementById("tvGuide");

const groupedChannels = channels.reduce((acc, channel) => {
  if (!acc[channel.category]) acc[channel.category] = [];
  acc[channel.category].push(channel);
  return acc;
}, {});

function populateGuide() {
  tvGuide.innerHTML = `<h2>Categories</h2>`;
  Object.keys(groupedChannels).forEach(category => {
    const categoryItem = document.createElement("div");
    categoryItem.classList.add("category-item");
    categoryItem.textContent = category;
    categoryItem.addEventListener("click", () => displayChannels(category));
    tvGuide.appendChild(categoryItem);
  });
}

function displayChannels(category) {
  tvGuide.innerHTML = `<h2>${category}</h2>`;
  groupedChannels[category].forEach((channel, index) => {
    const channelItem = document.createElement("div");
    channelItem.classList.add("channel-item");
    channelItem.textContent = channel.name;
    channelItem.addEventListener("click", () => playChannel(channel, index));
    tvGuide.appendChild(channelItem);
  });
}

function playChannel(channel, index) {
  videoPlayer.src = channel.video;
  channelDisplay.textContent = `Now Playing: ${channel.name}`;
  currentChannel = index;
  if (powerOn) {
    videoPlayer.play();
    showNotification(`${channel.category}`);
  }
}

function showNotification(message) {
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

function togglePower() {
  powerOn = !powerOn;
  if (powerOn) {
    tvScreen.classList.add("on");
    videoPlayer.classList.add("on");
    glowingButton.classList.add("on");
    channelDisplay.style.display = "block";
    videoPlayer.play();
    showNotification(`Power On`);
  } else {
    tvScreen.classList.remove("on");
    videoPlayer.classList.remove("on");
    glowingButton.classList.remove("on");
    channelDisplay.style.display = "none";
    videoPlayer.pause();
    showNotification(`Power Off`);
  }
}

document.getElementById("channelUp").addEventListener("click", () => {
  if (powerOn) {
    currentChannel = (currentChannel + 1) % channels.length;
    playChannel(channels[currentChannel], currentChannel);
  }
});

document.getElementById("channelDown").addEventListener("click", () => {
  if (powerOn) {
    currentChannel = (currentChannel - 1 + channels.length) % channels.length;
    playChannel(channels[currentChannel], currentChannel);
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

document.getElementById("power").addEventListener("click", togglePower);

document.getElementById("menu").addEventListener("click", () => {
  if (powerOn) {
    const previousChannel = currentChannel;
    while (currentChannel === previousChannel) {
      currentChannel = Math.floor(Math.random() * channels.length);
    }
    playChannel(channels[currentChannel], currentChannel);
    showNotification("Channel Shuffled");
  }
});

populateGuide();
