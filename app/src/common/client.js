// Set base URL
const url = 'https://www.googleapis.com/youtube/v3/videos';

// Google API library client
export const client = () => {

  // Initialize the client library
  console.log('Initializing Google API client');

  gapi.client.init({
    'apiKey': process.env.TESTING_KEY,
  }).then(() => {
    // Make an API request
    return gapi.client.request({
      'path': url,
      'params': {
        'part': 'id,contentDetails',
        'chart': 'mostPopular',
        'regionCode': 'US',
      },
    });
  }).then(
    response => { console.log(response.result) },
    reason => { console.log(`Error during API call: ${reason.result.error.message}`) }
  );
}
