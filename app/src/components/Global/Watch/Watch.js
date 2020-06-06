// Import Node modules
import React from 'react';

// Import Watch view
import WatchView from './WatchView';

/**
 * Video page component
 * @param {Object} props Component properties
 * @param {Object} props.data API response data
 * @returns {Object} React component
 */
const Watch = props => {

  // Deconstruct video data
  const {
    id,
    snippet,
    statistics,
  } = props.data;

  return <WatchView videoDetails={{id, snippet, statistics}} />;
}

export default Watch;
