// Import Node modules
import React from 'react';
import YouTube from 'react-youtube';

/**
 *  Video player component
 * @param {Object} props Component properties
 * @param {Object} props.videoID ID of the video to be played
 * @returns {Object} React component
 */
const Player = props => {

  const { videoID } = props;

  /**
   * Prevents immediate video playback after onReady
   * @param {Object} event onReady event for player
   */
  const _OnReady = event => event.target.pauseVideo();

  // Set player parameters
  const params = {
    playerVars: {
      enablejsapi: 1,
      modestbranding: 1,
    },
  };

  return <YouTube onReady={_OnReady} opts={params} videoId={videoID} />;

}

export default Player;
