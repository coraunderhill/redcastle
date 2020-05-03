import React from 'react';

/**
 * Video list view
 */
const ListView = (props) => {

  const {
    title,
  } = props;

  return (
    <div className="video-list">
      <div className="video-list-item">
        <span className="video-list-item-title">{title}</span>
      </div>
    </div>
  );

}

export default ListView;
