// Import Node modules
import { platform } from 'os';

// Import React renderer
import { updateView } from './common/renderer';

// Import YouTube Data API client
import list from './common/client';

// Import CSS frameworks
import photon from './static/css/_photon';

// Select framework depending on host OS
let cssFramework;
switch (platform) {
  case 'darwin':
    cssFramework = photon;
    break;
}

// Set up API request and execute
const params = {
  chart: 'mostPopular',
  part: 'id,snippet',
  regionCode: 'US',
};
list(params).then(res => {
  console.log(res.data);
  updateView(res.data);
});
