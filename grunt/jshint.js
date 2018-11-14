/**
 * 
 */
module.exports = function() {

	return {
		options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish'),
            force   : true,
            //reporterOutput: '<%= directories.reports %>/jshint/jshint.<%= grunt.template.today("isoDateTime") %>.txt'
        },
        all: '<%= files.js %>'
    };
};