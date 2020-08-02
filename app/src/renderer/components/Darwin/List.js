// Import modules
import React from 'react';
import { watch } from '@common/navigate';

/**
 * macOS video list component wrapper
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
    const date = new Date(publishedAt);
    const time = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const timestamp = `${date} – ${time}`;

    return (
      <div
        className="video-list-item"
        key={id}
        onClick={() => watch(id)}
      >
        <img
          className="video-list-item-thumbnails"
          src={thumbnails.medium.url}
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
