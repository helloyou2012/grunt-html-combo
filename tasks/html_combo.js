/*
 * grunt-html-combo
 * https://github.com/helloyou2012/grunt-html-combo
 *
 * Copyright (c) 2014 学霸
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var replace_css = function(src, data) {
    return data.replace(/<link[^>]*href=\"([^\"]+)\"[^>]*>/gi, function(wholeMatch, m1) {
      if (m1.indexOf('http') < 0) {
        var relativePath = path.relative(src, m1);
        var css_code = grunt.file.read(relativePath);
        return '<style type="text/css">' + css_code + '</style>';
      } else {
        return wholeMatch;
      }
    });
  };

  var replace_js = function(src, data) {
    return data.replace(/<script[^>]*src=\"([^\"]+)\"[^>]*>.*<\/script>/gi, function(wholeMatch, m1) {
      if (m1.indexOf('http') < 0) {
        var relativePath = path.relative(src, m1);
        var js_code = grunt.file.read(relativePath);
        return '<script type="text/javascript">' + js_code + '</script>';
      } else {
        return wholeMatch;
      }
    });
  };

  var html_combo = function(src, dest, options, cb) {
    var code = grunt.file.read(src);
    code = replace_css(src, code);
    code = replace_js(src, code);
    grunt.file.write(dest, code);
    cb(null);
  };

  grunt.registerMultiTask('html_combo', 'JS and CSS combo into html.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();
    var done = this.async();

    if (this.files.length > 0) {
      // Iterate over all specified file groups.
      this.files.forEach(function(f) {
        // Concat specified files.
        var src = f.src.filter(function(filepath) {
          // Warn on and remove invalid source files (if nonull was set).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          } else {
            return true;
          }
        });

        html_combo(src, f.dest, options, function(err) {
          if (!err) {
            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
          }
          done(!err);
        });

      });
    } else {
      // Print a success message.
      grunt.log.writeln('No page file found.');
      done();
    }
  });

};