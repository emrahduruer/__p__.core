/**
 *
 */
module.exports = function(/* grunt, options */) {

	return {

		dist : {
			cwd: '<%= directories.today_dist %>',
			src: ['<%= directories.today_dist %>/**/*'],
			dest: '<%= directories.artifacts %>/<%= pkg.name %>.zip'
		},

		reports : {
			cwd: '<%= directories.today_reports %>',
			src: ['<%= directories.today_reports %>/**/*'],
			dest: '<%= directories.artifacts %>/reports.zip'
		}

	};
};
