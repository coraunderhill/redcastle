// Import Node modules
import { google } from 'googleapis';

// Import React renderer
import { updateView } from './renderer';

// Initialize YouTube Data API
const youtube = google.youtube({
  auth: process.env.TESTING_KEY,
  version: 'v3',
});

/**
 * Query the API for a list of videos
 * @param {Object} params API request parameters
 */
export const list = async params => {
  const res = await youtube.videos.list(params);
  const { data } = res;
  updateView(data);
};
