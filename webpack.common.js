const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		common: './src/common.js',
		works: './src/works.js',
		faq: './src/faq.js',
		news: './src/news.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: {
					loader: 'pug-loader',
					options: {
						pretty: false
					}
				}
			},
			{
				test: /\.(woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]',
					context: ''
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.pug',
			chunks: ['works', 'common'],
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/news.pug',
			chunks: ['news', 'common'],
			filename: 'news.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/faq.pug',
			chunks: ['faq', 'common'],
			filename: 'faq.html'
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'static/'),
				to: path.resolve(__dirname, 'dist/')
			}
		])
	]
};
