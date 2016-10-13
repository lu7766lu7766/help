var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var path = require("path");
// console.log(path.resolve(__dirname, "build"));

module.exports = {
	entry: {
		main: './src/main.js',
		vendor: ['jquery',
			'bootstrap',
			'bootstrap/dist/css/bootstrap.css',
			'./css/2-col-portfolio.css',
			'./css/font-awesome.min.css',
			'./js/googlemap.js',
			'./js/markerclusterer.js'],
		/* <script src="vendor.js"></script>�������o�˧Y�i�פJ*/
	},
	output: {
		path: "src",
		filename: '[name].min.js'
	},
	module: {
		loaders: [
			{ test: /\.vue$/, loader: 'vue' },
			{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
		]
	},
	 vue: {
        loaders: {
			js: 'babel',
            css: 'style!css',
        }
    },
	babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
	resolve: {
		// �]�w���u�ݭn�g require('file') �Ӥ��μg�� require('file.jsx')
		extensions: ['', '.js', '.vue', 'jsx', '.json'],
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'root.jQuery': 'jquery'
		}),
		new ExtractTextPlugin('app.bundle.css'),
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};