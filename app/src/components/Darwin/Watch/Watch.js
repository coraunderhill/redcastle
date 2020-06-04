// Import Node modules
import React from 'react';

/**
 *
 * @param {Object} props Component properties
 * @param {string} channel Channel name
 * @param {string} text Video detail text
 * @param {string} title Video title
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
