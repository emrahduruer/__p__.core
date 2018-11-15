/**
 *
 */

module.exports = function() {

	return {
		coverage_report_js : {
			command : 'cat <%= directories.today_reports %>/coverage/js/lcov.info | codacy-coverage --token 288505a10bd44aa396a8b09dcb4c9d8c'
		},
	};
};
