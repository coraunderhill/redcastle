// Import Node modules
import React from 'react';

// Import React components
import Player from 'Components/Player/Player';

/**
 * Video page view
 * @param {Object} props Component properties
 * @param {Array} props.videoDetails Video details to be rendered
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

  return (
    <div className="watch-video">
      <div className="watch-player"><Player videoID={id} /></div>
      <div className="watch-video-details">
        <span className="watch-video-details-title">{title}</span>
        <br />
        <span className="watch-video-details-channel-title">{channelTitle}</span>
        &nbsp;–&nbsp;
        <span className="watch-video-details-publishedAt">{publishedAt}</span>
        <span className="watch-video-details-description">{description}</span>
      </div>
    </div>
  );

}

export default WatchView;
