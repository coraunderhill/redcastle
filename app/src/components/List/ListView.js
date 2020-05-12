// Import Node modules
import React from 'react';

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
    const desc = val.snippet.description;
    const id = val.id;
    const title = val.snippet.title;
    listItems.push(
      <div className="video-list-item" key={id}>
        <span className="video-list-item-title">{title}</span>
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
