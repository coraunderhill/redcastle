import React from 'react';
import { isRecent, parseDate, parseTime } from '@common/helpers';
import goTo from '@common/navigate';

/**
 * Video Grid component
 * @param {Object} props Component properties
 * @param {Array} props.data API response data
 * @returns {JSX.Element} React component
 */
const Grid = props => {

  const { data } = props;

  /**
   * @type {JSX.Element[]}
   */
  const gridItems = data.items.map(val =>
    <GridItem data={val} key={val.id} />
  );

  return <div className="grid">{gridItems}</div>;

}

/**
 * Video Grid Item component
 * @param {Object} props Component properties
 * @param {Array} props.data API response data
 * @returns {JSX.Element} React component
 */
const GridItem = props => {

  const { id } = props.data;
  const {
    channelTitle,
    publishedAt,
    thumbnails,
    title,
  } = props.data.snippet;

  // Convert timestamps
  const date = parseDate(publishedAt);
  const time = parseTime(publishedAt);
  let timestamp = '';

  // Assemble our timestamp
  const flag = isRecent(date);
  if (flag === 1) timestamp += `Today@${time}`
  else if (flag === 0) timestamp += `Yesterday@${time}`
  else timestamp += `${date}@${time}`
  const info = `${timestamp} by ${channelTitle}`;
  const styles = {
    backgroundImage: `url(${thumbnails.high.url.toString()})`
  };

  return (
    <div className="grid-item"
      onClick={() => goTo(`/watch?v=${id}`)}
      style={styles} >
      <div className="grid-item-header">
        <div className="frosted" />
        <div className="grid-item-info">
          <span className="grid-item-title">{title}</span>
          {info}
        </div>
      </div>
    </div>
  );
}

export default Grid;
