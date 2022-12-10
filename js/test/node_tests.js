// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

console.log("Running Node tests")

assert = require('assert');

assert.equal(typeof window, 'undefined', 'window is undefined before requiring micro-text');
assert.equal(typeof micro, 'undefined', 'micro is undefined before requiring micro-text');

var micro = require('../micro-text');

assert.equal(typeof micro.autoLink, 'function', 'micro.txt is exported');
assert.equal(typeof micro, 'undefined', 'micro is undefined after requiring micro-text');
assert.equal(typeof window, 'undefined', 'window is undefined after requiring micro-text');

var fs = require('fs');
var path = require('path');
fs.readFileSync(path.resolve(__dirname, '../micro-text.js'), "utf8").split('\n').forEach(function(line, lineNumber) {
  var isComment = false;
  // This matches runs of 'foo' "bar" /meh/ or even // with escaping like "foo\"bar"
  line.replace(/(["'\/])((?:(?!\1|\\).)*(?:\\.(?:(?!\1|\\).)*)*)\1/g, function(all, quote, content) {
    if (isComment || quote == '/' && !content) {
      isComment = true;
    } else if (quote != '/') {
      assert(!/(^|[^\\])\\u/.test(content), "Literal string contains potentially dangerous unicode escape on line " + (lineNumber + 1) +
          " of micro-text.js. It is safer to put these into a RegEx literal to avoid unicode normalization after minification.");
    }
  });
});

console.log("Node tests passed")