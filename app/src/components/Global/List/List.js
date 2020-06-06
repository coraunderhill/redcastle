// Import Node modules
import React from 'react';

// Import List view
import ListView from './ListView';

/**
 * Video list
 * @param {Object} props Component properties
 * @param {Object} props.data API response data
 * @returns {Object} React component
 */
const List = props => {

  const { data } = props;

  /**
   * List items to be passed to the view
   * @type {Array}
   */
  let listItems = [];

  // Iterate over the response items
  for (let [key, val] of Object.entries(data.items)) {
    const { id } = val;
    const {
      channelTitle,
      publishedAt,
      thumbnails,
      title,
    } = val.snippet;

    // Convert timestamp
    const date = new Date(publishedAt).toDateString();
    const time = new Date(publishedAt).toLocaleTimeString();

    // Add the new video info to the array
    listItems.push({
      id: id,
      channel: channelTitle,
      date: date,
      thumb: thumbnails,
      time: time,
      title: title,
    });
  }

  return (<ListView items={listItems} />);

}

export default List;
