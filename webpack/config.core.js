// Import modules
const path = require('path');

// Set core configuration values to be referenced
module.exports = {
	context: path.resolve(__dirname, '../app'),
	output: {
			path: path.resolve(__dirname, '../app/build'),
	},
	resolve: {
		alias: {
			Common: path.resolve(__dirname, '../app/src/common'),
			Components: path.resolve(__dirname, '../app/src/components'),
			Html: path.resolve(__dirname, '../app/src/static/html'),
		},
		extensions: [ '.js', '.jsx', '.json' ],
	},
};
