// Import Node modules
import React from 'react';

// Import React components
import List from 'Components/List/List';
import Watch from 'Components/Watch/Watch';

// Import React renderer
import updateView from './renderer';

// Import API client
import { list } from './client';

export const mostPopular = () => {

  const params = {
    chart: 'mostPopular',
    part: 'id,snippet',
    regionCode: 'US',
  };

  list(params).then(res => (
    updateView(<List data={res.data} />)
  ));
}

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
