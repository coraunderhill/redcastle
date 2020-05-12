// Import YouTube Data API client
const client = require('./common/client');

// Set API request parameters
const params = {
  chart: 'mostPopular',
  part: 'id,snippet',
  regionCode: 'US',
};

client.list(params);
