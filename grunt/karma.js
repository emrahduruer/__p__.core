module.exports = function() {

	return {
        unit: {
            configFile: './karma.config.js',
			webpack: {
		        resolve : {
					alias : '<%= alias %>'
				},
				entry : '<%= entry %>',
			},
			htmlReporter: {
		        outputFile: '<%= directories.today_reports %>/js/units.html'
		    },
			coverageIstanbulReporter: {
		        dir: '<%= directories.today_reports %>/coverage/js',
			}
        },
    };
};
