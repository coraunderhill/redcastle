import React from 'react';

import { parseDate, parseTime } from '@common/helpers';

import Player from './Player';

/**
 * Video page component
 * @param {Object} props Component properties
 * @param {Object} props.video API response data
 * @returns {JSX.Element|boolean} React component or false on error
 */
const Watch = props => {

  const { video } = props;

  // Make sure we have the correct API response
  if (!video.kind || video.kind !== 'youtube#video') {
    console.log('video expected from API in Watch component');
    return false;
  }

  // Deconstruct video video
  const { id, snippet } = video;

  return (
    <div className="watch-container">
      <Player videoID={id} />
      <WatchDetails snippet={snippet} />
    </div>
  );

};

/**
 * Video page details component
 * @param {Object} props Component properties
 * @param {Object} props.snippet API `snippet` response
 * @returns {JSX.Element} React component
 */
export const WatchDetails = props => {

    const {
      channelTitle,
      description,
      publishedAt,
      title,
    } = props.snippet;

    /**
     * @type {string}
     */
    const date = parseDate(publishedAt);

    /**
     * @type {string}
     */
    const time = parseTime(publishedAt);

    return (
      <div id="video-info">
        <h3>{title}</h3>
        <span>{channelTitle} — {date} at {time}</span>
        <p>{description}</p>
      </div>
    )
}

export default Watch;
