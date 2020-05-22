// Import Node modules
import React from 'react';

// Import React components
import Watch from '../components/Watch/Watch';

// Import React renderer
import updateView from './renderer';

// Import API client
import { list } from './client';

/**
 * Render the Watch component with a selected video
 * @param {string} videoID ID of the video to display
 */
export const watchVideo = videoID => {

  // Construct API parameters
  const params = {
    id: videoID,
    part: 'snippet,statistics',
  };

  // Query API and update view
  list(params).then(res => (
    updateView(<Watch data={res.data} />)
  ));

}
