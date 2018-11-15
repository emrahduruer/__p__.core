/**
 *
 */
module.exports = function() {

	return {
        dist: {
        	options: {
                create: [
                	'<%= directories.today_dist %>',
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
