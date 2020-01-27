'use strict';
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['./src/app.js'],
	devServer: {
		contentBase: './dist',
		hot: true,
		watchOptions: {
			poll: true
		}
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
				options: {
					emitWarning: true,
					configFile: './.eslintrc.js'
				}
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			title: 'Infinity Scroll',
			template: './index.html'
		})
	]
};
