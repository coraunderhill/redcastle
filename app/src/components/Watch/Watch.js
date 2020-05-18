// Import modules
import React from 'react';

// Import Nav view
import WatchView from './WatchView';

/**
 * Video page component
 * @param {Object} props Component properties
 * @param {Object} props.data API response data
 * @returns {Object} React component
 */
const Watch = props => {

  const { data } = props;

  // Deconstruct video data from single-item array
  const {
    id,
    snippet,
    statistics,
  } = data.items[0];

  // Wrap them up in an object for easier packaging
  const videoDetails = {
    id: id,
    snippet: snippet,
    stats: statistics,
  }

  return <WatchView videoDetails={videoDetails} />;
}

export default Watch;
