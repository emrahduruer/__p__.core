/**
 *
 */
module.exports = function() {

	return {
		js : {
			files : [
				{
					cwd : '<%= directories.newpen_composer %>/assets/dev/js',
					src : 'consts.js',
					dest : '<%= directories.newpen_composer %>/assets/js/',
					expand : true,
				}
			]
		},

		css : {
			files : [
				{
					cwd : '<%= directories.newpen_composer %>/assets/dev/css',
					src : '**',
					dest : '<%= directories.newpen_composer %>/assets/css/',
					expand : true,
				},
				{
					cwd : 'node_modules/@fortawesome/fontawesome-free/css',
					src : [ 'all.min.css', 'solid.min.css', 'brands.min.css', 'regular.min.css' ],
					dest: '<%= directories.newpen_composer %>/assets/css/fontawesome',
					expand : true
				},
				{
					cwd : 'node_modules/@fortawesome/fontawesome-free/webfonts',
					src : '**',
					dest: '<%= directories.newpen_composer %>/assets/css/webfonts',
					expand : true
				}
			]
		},

		dist : {
			files : [
				{
					cwd : '<%= directories.newpen_composer %>',
					src : [ 'newpen-composer.php' ],
					dest: '<%= directories.today_dist %>',
					expand : true
				},
				{
					cwd : '<%= directories.npc_php %>',
					src : [ '**/*.php' ],
					dest: '<%= directories.today_dist %>/npc',
					expand : true
				},
				{
					cwd : '<%= directories.core_php %>',
					src : [ '**/*.php' ],
					dest: '<%= directories.today_dist %>/newpen',
					expand : true
				},
				{
					cwd : '<%= directories.composer %>',
					src  : [ '**/*.php' ],
					dest : '<%= directories.today_dist %>/vendor',
					expand : true
				},
				{
					cwd : '<%= directories.compiled.js %>',
					src  : [ '**/*.js' ],
					dest : '<%= directories.today_dist %>/assets/js',
					expand : true
				},
				{
					cwd : '<%= directories.compiled.lib %>',
					src  : [ '**/*.*' ],
					dest : '<%= directories.today_dist %>/assets/lib',
					expand : true
				},
				{
					cwd : '<%= directories.compiled.css %>',
					src  : [ '**/*.css' ],
					dest : '<%= directories.today_dist %>/assets/css',
					expand : true
				},
				{
					cwd : '<%= directories.settings %>',
					src  : [ '**/*.*' ],
					dest : '<%= directories.today_dist %>/settings',
					expand : true
				},
				// TODO
				{
					cwd 	: '<%= directories.newpen_composer %>',
					src  	: [ 'test/web/*.*' ],
					dest 	: '<%= directories.today_dist %>',
					expand 	: true
				},
			]
		},

		'localdeploy' : {
			files : [
				{
					cwd : '<%= directories.today_dist %>',
					src : '**',
					dest : '<%= directories.local_deploy_path %>',
					expand : true,
				},
			]
		},

		artifact_reports: {
			src : '<%= directories.reports %>/reports-build<%= pkg.buildnumber %>.zip',
			dest: '<%= directories.artifacts %>/reports.zip'
		},

		artifact_dist: {
			files : [
				{
					cwd : '<%= directories.deployment %>/build<%= pkg.buildnumber %>/',
					src : '*.zip',
					dest : '<%= directories.artifacts %>',
					expand : true,
				},
			]
		}
	};
};
