// Import Node modules
import React from 'react';

// Import React components
import List from './components/List/List';

// Import React renderer
import { updateView } from './common/renderer';

// Import YouTube Data API client
import list from './common/client';

/**
 * Initiates app
 */
const start = () => {

  // Set up API request and execute
  const params = {
    chart: 'mostPopular',
    part: 'id,snippet',
    regionCode: 'US',
  };

  // Call API then update view
  list(params).then(res => {
    const { data } = res;
    const { kind } = data;
    let view;

    // Match view to response type
    switch (kind) {
      case 'youtube#videoListResponse':
      view = <List data={data} />
    }

    // Pass the view to the renderer
    updateView(view);
  });

}

start();
