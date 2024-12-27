// Import channels from different files
import { moviesChannels } from './js/movies.js';
import { cartoonsChannels } from './js/cartoons.js';

// Combine all channels into a single array
const channels = [
  ...moviesChannels,
  ...cartoonsChannels
];

export { channels };
