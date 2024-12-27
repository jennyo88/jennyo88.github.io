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

function populateGuide() {
  tvGuide.innerHTML = `<h2>TV Guide</h2>`;

  const categories = [
    { name: "Movies", channels: movisChannels },
    { name: "Cartoons", channels: cartoonsChannels },
  ];

  categories.forEach(category => {
    const categoryItem = document.createElement("div");
    categoryItem.classList.add("category-item");
    categoryItem.textContent = category.name;

    categoryItem.addEventListener("click", () => displayChannels(category.channels));
    tvGuide.appendChild(categoryItem);
  });
}

function playStatic(callback) {
  videoPlayer.src = "assets/videos/static.mp4"; // Example path
  videoPlayer.muted = true;
  channelDisplay.textContent = "Static...";
  videoPlayer.play();

  setTimeout(() => {
    callback();
  }, 2000);
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
      
      showNotification(
        startTime > 0
          ? `Resumed: ${channel.name} at ${Math.floor(startTime)}s`
          : `Playing: ${channel.name}`
      );
    });
  }
}

// power on and off
document.getElementById("power").addEventListener("click", togglePower);

// channel up and down
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

// volume up and down
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

// menu shuffle
document.getElementById("menu").addEventListener("click", () => {
  if (powerOn) {
    // Select a random channel different from the current one
    const previousChannel = currentChannel;
    let randomChannelIndex;

    do {
      randomChannelIndex = Math.floor(Math.random() * channels.length);
    } while (randomChannelIndex === previousChannel);

    currentChannel = randomChannelIndex;
    playChannel(channels[currentChannel]);

    // Show "Channel Shuffled" notification (auto-hides after 3 seconds)
    showNotification("Channel Shuffled");
  }
});


populateGuide();
