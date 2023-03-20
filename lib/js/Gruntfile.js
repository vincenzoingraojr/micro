// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.initConfig({
    qunit: {
      all: ['test/test.html', 'test/conformance.html']
    }
  });
};
