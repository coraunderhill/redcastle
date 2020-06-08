// Import Node modules
import React from 'react';

// Import React components
import List from 'Components/Global/List/List';

// Import theme init
import { initTheme } from 'Components';

// Import React renderer
import updateView from 'Common/renderer';

// Import YouTube Data API client
import { list } from 'Common/client';

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
    // Pass the view to the renderer
    updateView(<List data={res.data} />, '/');
  });

}

initTheme();
start();
