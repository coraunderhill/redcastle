import React from 'react';
import { parseDate, parseTime } from '@common/helpers';
import goTo from '@common/navigate';

/**
 * Video Grid component
 * @param {Object} props Component properties
 * @param {Array} props.data API response data
 * @returns {JSX.Element|boolean} React component or false on error
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
  const timestamp = `${time} on ${date}`;

  return (
    <div className="grid-item"
      // key={id}
      onClick={() => goTo(`/watch?v=${id}`)}
    >
      <div className="grid-item-thumb" style={{
        backgroundImage: `url(${thumbnails.high.url.toString()})`,
      }} />
      <div className="grid-item-content">
        <span className="grid-item-title"
          children={title}
          title={title}
        />
        <span className="grid-item-info">
          {channelTitle} – {timestamp}
        </span>
      </div>
    </div>
  );
}

export default Grid;
