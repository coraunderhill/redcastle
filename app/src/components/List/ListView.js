// Import Node modules
import React from 'react';

// Import resources
import './video-list';

/**
 * Video list view
 * @param {Object} props Component properties
 * @param {Object} props.items API response items
 */
const ListView = props => {

  // Get component properties
  const {
    items,
  } = props;

  const listItems = items.map(item => (
    <div className="video-list-item" key={item.id}>
      <a><span className="video-list-item-thumb"><img src={item.thumb.default.url} /></span></a>
      <a><span className="video-list-item-title">{item.title}</span></a>
      <span className="video-list-item-date"><a>{item.channel}</a> &ndash; {item.date} at {item.time}</span>
    </div>
  ));

  return (
    <div className="video-list">
      {listItems}
    </div>
  );

}

export default ListView;
