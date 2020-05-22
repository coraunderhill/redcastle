// Import Node modules
import React from 'react';
import YouTube from 'react-youtube';

/**
 *  Video player component
 * @param {Object} props Component properties
 */
const Player = props => {

  const { videoID } = props;

  console.log(videoID);

  const _OnReady = event => event.target.pauseVideo();

  const params = {
    playerVars: {
      enablejsapi: 1,
      modestbranding: 1,
    },
  };

  return <YouTube onReady={_OnReady} opts={params} videoId={videoID} />;

}

export default Player;
