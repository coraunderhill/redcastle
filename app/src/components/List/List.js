// Import modules
import React from 'react';

// Import List view
import ListView from './ListView';

/**
 * Video list
 * @param {Object} props React properties
 * @param {Object} props.data API response data
 */
const List = props => {

  const { data } = props;
  return (<ListView items={data.items} />);

}

export default List;
