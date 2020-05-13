// Import Node modules
import React from 'react';

// Import resources
import './video-list';

/**
 * Video list view
 * @param {Object} props React properties
 * @param {Object} props.items API response items
 */
const ListView = props => {

  const {
    items,
  } = props;

  // Iterate over items in object and map to new list
  let listItems = [];
  for (let [key, val] of Object.entries(items)) {
    const channel = val.snippet.channelTitle;
    const date = new Date(val.snippet.publishedAt).toDateString();
    const id = val.id;
    const time = new Date(val.snippet.publishedAt).toLocaleTimeString();
    const thumb = val.snippet.thumbnails.default.url;
    const title = val.snippet.title;

    listItems.push(
      <div className="video-list-item" key={id}>
        <span className="video-list-item-thumb"><img src={thumb} /></span>
        <span className="video-list-item-title">{title}</span>
        <span className="video-list-item-date">{channel} &ndash; {date} at {time}</span>
      </div>
    );
  }

  return (
    <div className="video-list">
      {listItems}
    </div>
  );

}

export default ListView;
