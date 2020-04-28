// Import modules
const path = require('path');

// Set core configuration values to be referenced
module.exports = {
  context: path.resolve(__dirname, '../app'),
  output: {
    path: path.resolve(__dirname, '../app/build'),
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
};
