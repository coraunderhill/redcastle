// Import modules
import React from 'react';

// Import components
import Player from '@components/Global/Player/Player';

// Import theme component getter
import { getThemeComponent } from '@components';

/**
 * Video page view
 * @param {Object} props Component properties
 * @param {Object} props.videoDetails Video details to be rendered
 * @returns {JSX.Element} React component
 */
const WatchView = props => {

  const {
    id,
    snippet,
    statistics,
  } = props.videoDetails;

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
