/**
 *
 */
var banner = '/*! <%= pkg.name %> - v<%= pkg.version %> build <%= pkg.buildnumber %> - ' +
'<%= grunt.template.today("dd-mm-yyyy") %> */';

module.exports = {

	assets: {
		options: {
			banner: banner
		},
		files: {
			src: [
				'<%= directories.today_dist %>/lib/**/*.js',
				'<%= directories.today_dist %>/lib/**/*.css',
			]
		}
	},
};
