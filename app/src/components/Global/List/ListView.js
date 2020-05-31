// Import Node modules
import React from 'react';

// Import navigation module
import { watchVideo } from 'Common/navigate';

/**
 * Video list view
 * @param {Object} props Component properties
 * @param {Array} props.items List items to be displayed
 * @returns {Object} React component
 */
const ListView = props => {

  const { items } = props;

  // Iterate over array and map to new list
  const listItems = items.map(item => (
    <div className="video-list-item" key={item.id}>
      <a onClick={() => watchVideo(item.id)}><span className="video-list-item-thumb"><img src={item.thumb.default.url} /></span></a>
      <a onClick={() => watchVideo(item.id)}><span className="video-list-item-title">{item.title}</span></a>
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
