var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: {
		polyfill: "babel-polyfill",
		app: './src/index.js'
	},
	output: {
		filename: 'js/[name].bundle.[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		modules: [
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "src/scss/"),
			path.resolve(__dirname, "src/templates/"),
			path.resolve(__dirname, "node_modules")
		],
		extensions: [".js", ".json",".scss", ".handlebars"]
	},
	// devtool : 'source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: "css-loader",
							options: {
								sourceMap: true
							}
						},
						{
							loader: "resolve-url-loader",
							options: {
								sourceMap: true
							}
						},
						{
							loader: "sass-loader",
							options: {
								includePaths: [
									path.resolve(__dirname, "src/scss/"),
									path.resolve(__dirname, "node_modules")
								],
								sourceMap: true
							}
						}
					]
				})
			},
			{	test: /\.handlebars$/, loader: "handlebars-loader" },
			{
			    test: /\.js$/,
			    use: {
			        loader: 'babel-loader',
			        options: {
				        presets: [
						    ["env", {
						      "targets": {
						        "browsers": ["last 2 versions"]
						      }
						    }]
						]
			        }
			    }
			},
			{	test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
			{	test: /\.(woff|woff2|eot|ttf|otf)$/, loader: 'file-loader?publicPath=../&name=fonts/[name].[ext]' }
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			verbose: true,
  			dry: false
		}),
		new ExtractTextPlugin({
			filename:  (getPath) => {
				return getPath('css/[name].[hash].css').replace('css/js', 'css');
			},
			allChunks: true
		}),
		new ExtractTextPlugin({
			filename:  (getPath) => {
				return getPath('fonts/[name].[hash].[ext]').replace('fonts/js', 'fonts');
			},
			allChunks: true
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
    	}),
    	new webpack.optimize.UglifyJsPlugin({
      		beautify: false,
      		sourceMap: true,
      		mangle: {
        		screw_ie8: true,
        		keep_fnames: true
      		},
      		compress: {
        		screw_ie8: true
      		},
      		comments: false
    	}),
		new HtmlWebpackPlugin({
			title: 'Webpack Scaffolding Production'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
  		compress: true,
		port: 2400
	}
};