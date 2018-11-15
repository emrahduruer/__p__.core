/**
 *
 */
module.exports = {
	'test' : [
		'karma:unit',
		'zip:reports',
	],

	'cov-rep' : [
		'shell:coverage_report_js',
	],

	'copy-assets' : [
		'copy:js',
		'copy:css',
	],

	'development': [
		'webpack:development',
	],

	'production': [
		'buildnumber',
		'postcss:minify',
		'webpack:production'
	],

	'dist' : [
		'clean:dist',
		'production',
		'mkdir:dist',
		'copy:dist',
		'usebanner:assets',
		'zip:dist',
	],

	'default' : [
		'development'
	],
};
