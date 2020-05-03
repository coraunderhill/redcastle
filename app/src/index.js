// Import YouTube Data API client
const client = require('./common/client');

const params = {
  chart: 'mostPopular',
  part: 'id',
  regionCode: 'US',
};

client.list(params);
