import React from 'react';
import YouTube from 'react-youtube';

/**
 *  Video player component
 * @param {Object} props Component properties
 * @param {Object} props.videoID ID of the video to be played
 * @returns {JSX.Element} React component
 */
const Player = props => {

  const { videoID } = props;

  /**
   * Player API parameters
   * @type {Object}
   */
  const params = {
    playerVars: {
      autoplay: true,
      containerClassName: 'aspect-container',
      enablejsapi: 1,
      modestbranding: 1,
    },
  };

  return (
      <YouTube containerClassName='aspect-container'
        opts={params}
        videoId={videoID}
      />
  );

}

export default Player;
