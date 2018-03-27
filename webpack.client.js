let path = require("path"),
	webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//3rd party modules
const vendorModules = ["react", "react-dom", "react-router-dom", "prop-types"];
const isDebug = true;
const dirname = path.resolve("./");

const devTool = isDebug ? "eval-source-map" : "";
const plugins = [ 
  new HtmlWebpackPlugin({template: "./src/client/index.html"}),
];

const cssLoader = { test: /\.css$/, use: ["style-loader", "css-loader"]};
const sassLoader = { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] };
const appEntry = __dirname + "/src/client/index.js";


	// ---------------------
	// WEBPACK CONFIG
module.exports = {
		devtool: devTool,
		entry: {
			application: appEntry,
			vendor: vendorModules
		},
		output: {
			path: path.join(dirname, "public"),
			filename: "[name].js",
			publicPath: "/"
		},
		module : {
			rules: [
				{ test: /\.js$/, loader:"babel-loader", exclude: "/node_modules/", options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        } },
				{ test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)$/, loader:"url-loader?limit=1024"},
				cssLoader,
				sassLoader
			]
    },
    plugins: plugins,
    optimization: {
      splitChunks: {
          cacheGroups: {
              vendor: {
                  test: 'vendor',
                  name: "vendor",
                  chunks: "initial"
              }
          }
      }
    },
	};
	// ---------------------
