/*jshint node:true*/
/* global require, module */
// jscs:disable
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {});

  return app.toTree();
};
