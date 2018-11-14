/**
 *
 */

module.exports = function() {

	return {
		coverage_report_js : {
			command : 'cat <%= directories.today_reports %>/coverage/js/lcov.info | codacy-coverage --token 0783e50890184aceadf2bf13f75e157b'
		},
	};
};
