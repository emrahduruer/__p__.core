/**
 *
 */
module.exports = function() {

	return {
		dist : {
			files : [
				{
					cwd : '<%= directories.compiled.js %>',
					src  : [ '**/*.js' ],
					dest : '<%= directories.today_dist %>/lib/js',
					expand : true
				},
				{
					cwd : '<%= directories.compiled.lib %>',
					src  : [ '**/*.*' ],
					dest : '<%= directories.today_dist %>/lib/lib',
					expand : true
				},
				{
					cwd : '<%= directories.compiled.css %>',
					src  : [ '**/*.css' ],
					dest : '<%= directories.today_dist %>/lib/css',
					expand : true
				},
				{
					cwd : '<%= directories.settings %>',
					src  : [ '**/*.*' ],
					dest : '<%= directories.today_dist %>/settings',
					expand : true
				},
			]
		},
	};
};
