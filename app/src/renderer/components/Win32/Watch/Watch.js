// Import Node modules
import React from 'react';
import { Text } from '@fluentui/react/lib/Text';

/**
 *
 * @param {Object} props Component properties
 * @param {string} props.channel Channel name
 * @param {string} props.text Video detail text
 * @param {string} props.title Video title
 */
export const WatchDetails = props => {

    const {
      channel,
      text,
      title
    } = props;

    return (
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <Text children={title} variant="xLarge" />
          <br />
          <Text children={channel} variant="large" />
          <br />
          <Text children={text} />
        </div>
      </div>
    )
}
