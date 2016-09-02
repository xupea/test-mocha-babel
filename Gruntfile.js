module.exports = function(grunt) {

  grunt.initConfig({
    run: {
      runJasmineES6: {
        cmd: 'mocha',
        args: [
          '--compilers',
          'js:babel-register',
          './test/*.spec.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-run')

  grunt.registerTask('default', ['run'])

}
