// Import modules
import React from 'react';
import { parseDate, parseTime } from '@common/helpers';
import { watch } from '@common/navigate';

/**
 * macOS video list component
 * @param {Object} props Component properties
 * @param {Array} props.data API response data
 * @returns {JSX.Element|boolean} React component or false on error
 */
const List = props => {

  const { data } = props;

  // Make sure we have the correct API response
  if (!data.kind || data.kind !== 'youtube#videoListResponse') {
    console.error('videoListResponse expected from API in List component');
    return false;
  }

  const listItems = data.items.map(val => {
    const { id } = val;
    const {
      channelTitle,
      publishedAt,
      thumbnails,
      title,
    } = val.snippet;

    // Convert timestamp
    const date = parseDate(publishedAt);
    const time = parseTime(publishedAt);
    const timestamp = `${date} – ${time}`;

    return (
      <div
        className="video-list-item"
        key={id}
        onClick={() => watch(id)}
      >
        <img
          className="video-list-item-thumbnails"
          src={thumbnails.high.url}
          title={title}
        />
        <div className="video-list-item-details">
          <div
            className="video-list-item-title"
            children={title}
            title={title}
          />
          <div className="video-list-item-info">
            {timestamp}
          </div>
        </div>
      </div>
    );

  });

  return <div className="video-list-group" children={listItems} />;

}

export default List;
