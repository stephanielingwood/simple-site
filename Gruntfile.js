module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");

  var srcFiles = [ "./server.js", "./app/script.js", "./lib/joke.js", "./lib/random.js", "./lib/randomLetters.js", "./lib/piglatinify.js", "./lib/quote.js"];

  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        sub: true
      }
    },
    jscs: {
      src: srcFiles,
      options: {
        config: ".jscsrc"
      }
    }
  });

  grunt.registerTask("default", [ "jshint", "jscs" ]);
};
