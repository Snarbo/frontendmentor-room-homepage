module.exports = function (grunt) {
  const sass = require('node-sass');

  // Configuration
  grunt.initConfig({
    watch: {
      sass: {
        files: ['src/css/scss/**/*.scss'],
        tasks: ['sass', 'cssmin', 'postcss'],
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['concat', 'uglify'],
      },
    },
    concat: {
      //concat all js files
      js: {
        src: ['src/js/components/*.js'],
        dest: 'src/js/dist/concat.js',
      },
    },
    uglify: {
      //minify js file
      build: {
        src: ['src/js/dist/concat.js'],
        dest: 'src/js/dist/concat.min.js',
      },
    },
    sass: {
      //concat all scss files
      options: {
        implementation: sass,
        sourceMap: false,
      },
      dist: {
        files: {
          'src/css/dist/site.css': 'src/css/scss/site.scss',
        },
      },
    },
    cssmin: {
      //minify css file
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
      },
      target: {
        files: {
          'src/css/dist/site.min.css': ['src/css/dist/tailwind.css', 'src/css/dist/site.css'],
        },
      },
    },
    //compile tailwind
    postcss: {
      options: {
        map: true,
        processors: [require('tailwindcss')('./tailwind.config.js')],
      },
      dist: {
        expand: true,
        cwd: 'src/css/scss/vendor/tailwind',
        src: ['tailwind.css'],
        dest: 'src/css/dist',
        ext: '.css',
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-postcss');

  // Register tasks
  grunt.registerTask('watch-js', 'watch:js');
  grunt.registerTask('watch-sass', 'watch:sass');
  grunt.registerTask('default', 'watch');
};
