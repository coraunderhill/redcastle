import { youtube } from 'googleapis/build/src/apis/youtube/';

/**
 * Initializes the YouTube Data API
 */
const client = youtube({
  auth: process.env.TESTING_KEY,
  version: 'v3',
});

/**
 * Query the API for a list of videos
 * @param {Object} params API request parameters
 * @returns {Promise} Asyncronous API call
 */
export const list = async params => (
  await client.videos.list(params)
);
