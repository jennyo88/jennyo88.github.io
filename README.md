# RetroTV with TV Guide

RetroTV is an interactive web-based simulation of a retro TV set with a dynamic TV guide. Users can turn the TV on or off, shuffle channels, adjust the volume, and select specific channels from a categorized TV guide.

## Features

### TV Simulation
- **Power Button**: Toggles the TV on and off, with a glowing red or green button to indicate the status.
- **Channel Navigation**: Use the channel up and down buttons to browse channels.
- **Volume Control**: Adjust the volume with up and down buttons, displaying notifications and muting when the volume reaches 0.
- **Channel Shuffle**: Use the menu button to shuffle to a random channel.

### Dynamic TV Guide
- **Categories and Channels**: Channels are organized into categories for easy navigation.
- **Back to Categories**: Easily return to the category list from a specific channel list.
- **Interactive Selection**: Click a channel name to play it immediately.

### Notifications
- Real-time notifications for power, volume changes, and current channel updates.

### Visual Enhancements
- **Retro TV Overlay**: Authentic CRT TV overlay design.

## File Structure
- **`index.html`**: The main HTML file that integrates the TV and TV guide functionality.
- **`channels.js`**: Contains the list of channels and categories in JavaScript format.
- **`tvclean.webp`**: Background overlay for the TV screen.

## How It Works
1. **Power On/Off**:
   - When powered off, the TV displays a glowing red light and a dark screen with a halo effect.
   - When powered on, the light turns green, and the current channel plays.
2. **TV Guide**:
   - Organized by categories (e.g., Movies, Cartoons).
   - Clicking a category displays the channels within it.
   - Clicking a channel immediately plays it on the TV.
   - Use the back button to return to the main categories.
3. **Volume and Notifications**:
   - Adjust volume with visual feedback.
   - Volume changes are shown as notifications.
   - Displays "Mute" when the volume is at 0.

## Usage

1. Clone or download the repository.
2. Host the project locally or on a static web server (e.g., GitHub Pages).
3. Ensure the `channels.js` file is properly loaded and contains the desired channels and categories.

### Example `channels.js` File
```javascript
const channels = [
  { name: "The Thing (1982)", category: "Movies", video: "https://example.com/the-thing.mp4" },
  { name: "Hocus Pocus (1993)", category: "Movies", video: "https://example.com/hocus-pocus.mp4" },
  { name: "Kids WB (2001) Part 1", category: "Cartoons", video: "https://example.com/kids-wb-1.mp4" },
  { name: "Kids WB (2001) Part 2", category: "Cartoons", video: "https://example.com/kids-wb-2.mp4" },
];
```

## Setup for GitHub Pages
1. Add all files (`index.html`, `channels.js`, `tvclean.webp`) to your repository.
2. Enable GitHub Pages in the repository settings.
3. Access your site using the provided GitHub Pages URL.

## Screenshots

### Channel Display
![Channel Display](https://raw.githubusercontent.com/jennyo88/jennyo88.github.io/refs/heads/main/assets/images/tvclean.webp)

## Future Improvements
- Add more customization options for channels.
- Enhance the notification system.
- Add support for live streams or additional media types.

## License
This project is open-source and available under the MIT License.

