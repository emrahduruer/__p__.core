
module.exports = function(grunt) {

	'use strict';

    var directoriesConfig = {
		dev 			: require('path').resolve('dev'),
        assets			: require('path').resolve('assets'),
        settings		: require('path').resolve('settings'),
		distribution 	: require('path').resolve('lib'),
        source 			: {
        	js  : '<%= directories.dev %>/js',
        	css : '<%= directories.dev %>/css',
        },
        compiled 		: {
        	js  : '<%= directories.distribution %>/js',
        	css : '<%= directories.distribution %>/css',
        	lib : '<%= directories.distribution %>/lib'
        },
        reports 		: './reports',
		artifacts 		: './artifacts',
        today_dist		: './dist/<%= pkg.name %>-v<%= pkg.version %>-build<%= pkg.buildnumber %>',
		today_reports   : '<%= directories.reports %>/build<%= pkg.buildnumber %>',
    };

	// show elapsed time at the end
    require('time-grunt')(grunt);

	require('load-grunt-config')(grunt, {
        // path to task.js files, defaults to grunt dir
        configPath: require('path').resolve('grunt'),

        // auto grunt.initConfig
        init: true,

        // data passed into config.  Can use with <%= test %>
        data: {
            test: false,
			ci  : ((process.env.CI || 'false').toLowerCase().trim() === 'true' ? true : false),
            pkg : grunt.file.readJSON('package.json'),
	        directories: directoriesConfig,
	        files: {
	        	js   : [
	                'Gruntfile.js',
	                '<%= directories.assets %>/dev/js/**/*.js',
	                'grunt/{,*/}*.js'
	            ],
	            css  : [
	                '<%= directories.assets %>/dev/css/**/*.css',
	            ],
	            json : [
	                '{,*/}*.json',
	            ],
	        },
			alias: {
			    '__p__' : '<%= directories.source.js %>/core.js',
			},
			entry: {
			    'index' : [
					'<%= directories.source.js %>/index.js',
			    ],
			},
        },

        // use different function to merge config files
        mergeFunction: require('recursive-merge'),

        // can optionally pass options to load-grunt-tasks.
        // If you set to false, it will disable auto loading tasks.
        loadGruntTasks: {

            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        },

        //can post process config object before it gets passed to grunt
        postProcess: function(/* config */) { },

        //allows to manipulate the config object before it gets merged with the data object
        preMerge: function(/* config, data */) { }
    });

};
