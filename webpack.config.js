var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ 	
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: [
	'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
		{test: /\.js$/, exclude: /nodule_modules/, loader: "babel-loader"} 
		//any js files in the project, run this transformation, excluding node modules folder.
		]
	},
	plugins: [HtmlWebpackPluginConfig]
};

//The purpose of the Webpack is to transform the contents of the entry.js file by running it through the loader. 
// This converts the jsx based file into javascript. 
/* The Plugin makes injects the index.html into the same directory as the new js file, allowing it to 
reference it automatically. */

