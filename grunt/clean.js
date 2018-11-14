/**
 * 
 */
module.exports = function(/* grunt, options */) {

	return {
		
		assets 	: '<%= directories.assets %>',
		
		dist	: '<%= directories.today_dist %>',
			
		localdeploy	: '<%= directories.local_deploy_path %>'
	};
};