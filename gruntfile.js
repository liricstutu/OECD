module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		less:{
			compile:{
				files:{
					'www/css/main.css' : 'src/less/*.less'
				}
			}
		},
		concat: {
		  options: {
			separator: ';'
		  },
		  dist: {
			// the files to concatenate
			src: ['src/js/*.js'],
			// the location of the resulting JS file
			dest: 'www/js/main.js'
		  }
		},
		uglify: {
		  
		  dist: {
			files: {
			  'www/js/main.min.js': ['<%= concat.dist.dest %>']
			}
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['less', 'concat','uglify'])
}