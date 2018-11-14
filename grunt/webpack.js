
module.exports = function() {

	var development = {
		output : {
			path : '<%= directories.compiled.js %>',
			filename : '[name].js',
			devtoolModuleFilenameTemplate : '../../[resource]'
		},
		target : 'web',
		context : __dirname,
		devtool : 'source-map',
		mode : 'development',
		module : {
			rules : [
				{
					test : /\.js$/,
					exclude : /node_modules/,
				//use : [
				//	{
				//		loader : 'babel-loader',
				//		query : {
				//			presets : [ 'env' ],
				//		},
				//	},
				//],
				},
			],
		},
		resolve : {
			alias : '<%= alias %>'
		},
		entry : '<%= entry %>',
		watch : false,
	};

	var production = {
		output : {
			path : '<%= directories.compiled.js %>',
			filename : '[name].js',
		},
		target : 'web',
		context : __dirname,
		devtool : 'source-map',
		mode : 'production',
//		module : {
//			rules : [
//				{
//					test : /\.js$/,
//					exclude : /node_modules/,
//				use : [
//					{
//						loader : 'babel-loader',
//						query : {
//							presets : [ 'env' ],
//						},
//					},
//				],
//				},
//			],
//		},
		resolve : {
			alias : '<%= alias %>'
		},
		entry: '<%= entry %>',
		performance: { hints: false },
//		optimization: {
//			//minimize: true,
//			minimizer: [
//				new UglifyJsPlugin( ),
//			],
//		},
	};

	return {
		development : development,
		production  : production
	};
};
