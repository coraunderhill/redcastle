// Import Node modules
import { google } from 'googleapis';

// Initialize YouTube Data API
const youtube = google.youtube({
  auth: process.env.TESTING_KEY,
  version: 'v3',
});

/**
 * Query the API for a list of videos
 * @param {Object} params API request parameters
 */
const list = async params => (
  await youtube.videos.list(params)
);

export default list;
