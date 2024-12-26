const channels = [
  { name: "The Thing (1982)", category: "Movies", video: "https://archive.org/download/the-thing-1982-vhs/The%20Thing%201982%20VHS%20.mp4" },
  /* Add all channel data here */
];

let currentChannel = 0;
let powerOn = false;

function populateGuide() {
  /* Populate TV Guide logic */
}

function togglePower() {
  /* Power toggle logic */
}

document.getElementById("power").addEventListener("click", togglePower);
/* Add all other event listeners */

populateGuide();
