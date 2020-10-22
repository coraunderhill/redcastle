import React from 'react';
import { parseDate, parseTime } from '@common/helpers';
import goTo from '@common/navigate';

/**
 * Video Grid component
 * @param {Object} props Component properties
 * @param {Array} props.data API response data
 * @returns {JSX.Element|boolean} React component or false on error
 */
const Grid = props => {

  const { data } = props;

  // Make sure we have the correct API response
  if (!data.kind || data.kind !== 'youtube#videoListResponse') {
    console.error('videoListResponse expected from API in Grid component');
    return false;
  }

  /**
   * @type {JSX.Element[]}
   */
  const gridItems = data.items.map(val => {
    const { id } = val;
    const {
      channelTitle,
      publishedAt,
      thumbnails,
      title,
    } = val.snippet;

    // Convert timestamps
    const date = parseDate(publishedAt);
    const time = parseTime(publishedAt);
    const timestamp = `${time} on ${date}`;

    return (
      <div
        className="grid-item"
        key={id}
        onClick={() => goTo(`/watch?v=${id}`)}
      >
        <div className="grid-item-thumb" style={{
          backgroundImage: `url(${thumbnails.high.url.toString()})`,
        }} />
        <div className="grid-item-content">
          <span
            className="grid-item-title"
            children={title}
            title={title}
          />
          <span className="grid-item-info">
            By {channelTitle} @ {timestamp}
          </span>
        </div>
      </div>
    );

  });

  return <div className="grid" children={gridItems} />;

}

export default Grid;
