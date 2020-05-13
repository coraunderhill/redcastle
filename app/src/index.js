// Import Node modules
import { platform } from 'os';

// Import YouTube Data API client
import { list } from './common/client';

// Import CSS frameworks
import photon from './static/css/_photon';

// Select framework depending on host OS
let cssFramework;
switch (platform) {
  case 'darwin':
    cssFramework = photon;
    break;
}

// Set API request parameters
const params = {
  chart: 'mostPopular',
  part: 'id,snippet',
  regionCode: 'US',
};

list(params);
