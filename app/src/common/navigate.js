// Import Node modules
import React from 'react';

// Import React components
import List from 'Components/Global/List/List';
import Watch from 'Components/Global/Watch/Watch';

// Import React renderer
import updateView from './renderer';

// Import API client
import { list } from './client';

/**
 * Render the List component with trending videos
 */
export const mostPopular = () => {

  // Set API parameters
  const params = {
    chart: 'mostPopular',
    part: 'id,snippet',
    regionCode: 'US',
  };

  // Call API and update view
  list(params).then(res => (
    updateView(<List data={res.data} />)
  ));
}

/**
 * Render the Watch component with a selected video
 * @param {string} videoID ID of the video to display
 */
export const watchVideo = videoID => {

  // Set API parameters
  const params = {
    id: videoID,
    part: 'snippet,statistics',
  };

  // Call API and update view
  list(params).then(res => (
    updateView(<Watch data={res.data} />)
  ));

}
