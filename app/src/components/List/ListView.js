import React from 'react';

/**
 * Video list view
 */
const ListView = (props) => {

  const {
    items,
  } = props;

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
