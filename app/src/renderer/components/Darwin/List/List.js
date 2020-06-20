// Import Node modules
import React from 'react';

// Import navigation module
import { watchVideo } from '@common/navigate';

/**
 * macOS video list component wrapper
 * @param {Object} props Component properties
 * @param {Array} props.items List items to be rendered
 * @returns {JSX.Element} React component
 */
const List = props => {

  const { items } = props;

  const _gotoWatch = videoId => {

    watchVideo(videoId);

  }

  const newList = items.map(val => {
    const {
      channel,
      date,
      id,
      thumb,
      time,
      title,
    } = val;

    return (
      <div className="video-list-item"
        key={id}
        onClick={() => _gotoWatch(id)}
      >
        <img className="video-list-item-thumb" src={thumb.default.url} />
        <div className="video-list-item-details">
          <span className="video-list-item-title" children={title} />
          <br />
          <span className="video-list-item-info">
            {channel} – {date} at {time}
          </span>
        </div>
      </div>
    );
  });

  return <div className="video-list-group" children={newList} />;

}

export default List;
