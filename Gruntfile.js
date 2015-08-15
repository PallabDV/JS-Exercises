module.exports = function(grunt) {

	//Project configuration
	grunt.initConfig({
		//This line makes the node configurations available for use.
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				node: true,
				globals: {
					module: true
				}
			},
			cipher: {
				src: ['cipher/cipher.js']
			}
		}
	});

	//Load the plugin that provides utilities
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//Default Task(s)
	grunt.registerTask('default', ['jshint'])
}