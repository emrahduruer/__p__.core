/**
 * 
 */
module.exports = function() {

	return {
//		options: {
//			//csslintrc: '.csslintrc',
//			formatters: [
//				{
//					id: require('csslint-stylish'), 
//					dest: 'report/csslint_stylish.xml'
//				}
//			]
//		},
		options: {
			csslintrc: '.csslintrc',
			formatters: [
//				{
//					id: 'junit-xml', 
//					dest: '<%= directories.reports %>/csslint/csslint_junit.<%= grunt.template.today("isoDateTime") %>.xml'
//				},
//				{
//					id: 'csslint-xml', 
//					dest: '<%= directories.reports %>/csslint/csslint.<%= grunt.template.today("isoDateTime") %>.xml'
//				},
				{
					id: require('csslint-stylish'), 
				}
		    ]
		},
		strict: {
			options: {
				import: 2
		    },
		    src: ['<%= files.css %>']
		}
    };
};