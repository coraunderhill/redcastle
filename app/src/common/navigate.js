// Import Node modules
import React from 'react';

// Import React components
import Watch from '../components/Watch/Watch';

// Import React renderer
import updateView from './renderer';

// Import YouTube Data API client
import { list } from './client';

export const watchVideo = videoId => {

  const params = {
    id: videoId,
    part: 'snippet,statistics',
  };

  list(params).then(res => {
    updateView(<Watch data={res.data} />);
  });

}
