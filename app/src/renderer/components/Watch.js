// Import modules
import React from 'react';

// Import components
import Player from './Player';

// Import modules
import { parseDate, parseTime } from '@common/helpers';

/**
 * macOS video player component
 * @param {Object} props Component properties
 * @param {Object} props.data API response data
 * @returns {JSX.Element|boolean} React component or false on error
 */
const Watch = props => {

  const { data } = props;

  // Make sure we have the correct API response
  if (!data.kind || data.kind !== 'youtube#video') {
    console.log('video expected from API in Watch component');
    return false;
  }

  // Deconstruct video data
  const { id } = data;
  const {
    channelTitle,
    description,
    publishedAt,
    title,
  } = data.snippet;

  /**
   * @type {Date}
   */
  const date = new Date(publishedAt);

  /**
   * @type {string}
   */
  const postedAt = parseTime(date);

  /**
   * @type {string}
   */
  const postedOn = parseDate(date);

  return (
    <div className="watch-container">
      <Player videoID={id} />
      <WatchDetails channel={channelTitle} text={description} title={title} />
    </div>
  );

  /**
   * @type {string}
   */
  const postedOn = parseDate(date);

  return (
    <div>
      <Player videoID={id} />
      <div className="watch-container">
        <WatchDetails channel={channelTitle} text={description} title={title} />
      </div>
    </div>
  );

};

/**
 * macOS video details component
 * @param {Object} props Component properties
 * @param {string} props.channel Channel name
 * @param {string} props.text Video detail text
 * @param {string} props.title Video title
 * @returns {JSX.Element} React component
 */
export const WatchDetails = props => {

    const {
      channel,
      text,
      title
    } = props;

    return (
      <div>
        <h3>{title}</h3>
        <span>{channel}</span>
        <p>{text}</p>
      </div>
    )
}

export default Watch;
