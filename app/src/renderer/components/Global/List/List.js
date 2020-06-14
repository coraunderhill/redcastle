// Import Node modules
import React from 'react';

// Import theme component getter
import { getThemeComponent } from 'Components';

/**
 * Video list
 * @param {Object} props Component properties
 * @param {Object} props.data API response data
 * @returns {JSX.Element} React component
 */
const List = props => {

  const { data } = props;

  /**
   * List component wrapper from theme
   * @type {JSX.Element}
   */
  const ThemeList = getThemeComponent('List');

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
    const date = new Date(publishedAt);
    const time = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    // Add the new video info to the array
    listItems.push({
      id: id,
      channel: channelTitle,
      date: date.toDateString(),
      thumb: thumbnails,
      time: time,
      title: title,
    });
  }

  return <ThemeList items={listItems} />;

}

export default List;
