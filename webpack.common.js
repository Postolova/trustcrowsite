const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.[chunkhash].js'
	},
	module: {
		rules: [{
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
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/news.pug',
			filename: 'news.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/faq.pug',
			filename: 'faq.html'
		}),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, 'static/'),
			to: path.resolve(__dirname, 'dist/')
		}])
	]
};
