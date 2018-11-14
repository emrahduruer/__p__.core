/**
 *
 */
module.exports = function(grunt, options) {

	if (options.ci) {
		options.pkg.buildnumber = process.env.APPVEYOR_BUILD_NUMBER;
		return {
			package : {}
		};
	}

	return  {

		options : {
			field : 'buildnumber',
		},
		files : [ 'package.json' ]
	};
};
