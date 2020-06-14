// Import Node modules
import React from 'react';

/**
 * macOS video list component wrapper
 * @param {Object} props Component properties
 * @param {Array} props.items List items to be rendered
 * @returns {JSX.Element} React component
 */
const List = props => {

  const { items } = props;

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
      <div className="video-list-item" key={id}>
        <img
          className="video-list-item-thumb"
          src={thumb.default.url}
        />
        <div className="video-list-item-details">
          <span className="video-list-item-title">{title}</span>
          <br />
          <span className="video-list-item-info">
            {channel} – {date} at {time}
          </span>
        </div>
      </div>
    );
  });

  return newList;

}

export default List;
