// Import plugins
const DotEnvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Import core configuration values
const core  = require('./config.core.js');

// Base configuration
module.exports = {
	context: core.context,
	entry: './src',
	module: {
		rules: [
			{ // JavaScript and JSX
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					plugins: ['@babel/plugin-transform-runtime'],
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
		],
	},
	output: core.output,
	plugins: [
		new DotEnvPlugin(),
		new HtmlWebpackPlugin({
			cache: false,
			template: 'src/static/html/template.html',
		}),
	],
	resolve: core.resolve,
};
