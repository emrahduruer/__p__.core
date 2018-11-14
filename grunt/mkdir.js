/**
 *
 */
module.exports = function() {

	return {
        dist: {
        	options: {
                create: [
                	'<%= directories.today_dist %>',
                	'<%= directories.deployment %>/build<%= pkg.buildnumber %>/'
                ]
            },
        },
		artifacts: {
        	options: {
                create: [
                	'<%= directories.artifacts %>',
                ]
            },
        }
    };
};
