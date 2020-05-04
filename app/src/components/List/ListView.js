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
    listItems.push(
      <div className="video-list-item" key={val.id}>
        <span className="video-list-item-id">{val.id}</span>
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
