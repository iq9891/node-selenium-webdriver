module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-protractor-runner');

  // Define the configuration for all the tasks
  grunt.initConfig({
    protractor: {
      options: {
        configFile: "node_modules/protractor/example/conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: "protractor.conf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    },
  });
  grunt.registerTask('e2e', ['protractor']);
};
