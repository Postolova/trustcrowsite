const merge = require('webpack-merge');
const common = require('./webpack.common');
const autoprefixer = require('autoprefixer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|static)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [autoprefixer()]
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(gif|jpe?g|png|svg|webp)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[hash].[ext]',
							context: ''
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							optipng: {
								enabled: true
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false
							},
							webp: {
								quality: 75
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css'
		}),
		new CriticalPlugin({
			src: 'index.html',
			inline: true,
			minify: true,
			dest: 'index.html'
		})
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	}
});
