const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebPackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico',
		}),
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true,
		hot: true,
	},
	module: {
		rules: [
			// 1st Rule
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			// 2nd Rule
			{
				test: /\.((s)css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			// 3rd Rule
			{
				test: /\.(jpg|png|svg)$/,
				use: ['url-loader']
			},
		],
	},
	resolve: {
		modules: ['node_modules'],
		alias: {
			react: path.join(__dirname, 'node_modules', 'react'),
		},
		extensions: ['*', '.tsx', '.ts', '.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.[fullhash].js',
		publicPath: 'auto'
	},
};