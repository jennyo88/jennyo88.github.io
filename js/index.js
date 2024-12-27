let currentChannel = 0;
let powerOn = false;

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
      showNotification(`Playing: ${channel.name}`);
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

populateGuide();
