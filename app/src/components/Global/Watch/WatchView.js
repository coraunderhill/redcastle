// Import Node modules
import React from 'react';

// Import React components
import Player from 'Components/Global/Player/Player';

// Import theme component getter
import { getThemeComponent } from '../..'

/**
 * Video page view
 * @param {Object} props Component properties
 * @param {Object} props.videoDetails Video details to be rendered
 * @returns {Object} React component
 */
const WatchView = props => {

  const { videoDetails } = props;

  // Deconstruct video details
  const {
    id,
    snippet,
    stats,
  } = videoDetails;

  // Rinse and repeat with the detail objects
  const {
    channelTitle,
    description,
    publishedAt,
    title,
  } = snippet;

  // Get theme components
  const WatchDetails = getThemeComponent('WatchDetails');

  return (
    <div className="watch-video">
      <div className="watch-player">
        <Player videoID={id} />
      </div>
      <WatchDetails
        channel={channelTitle}
        text={description}
        title={title}
      />
    </div>
  );

}

export default WatchView;
