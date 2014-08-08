'use strict';

var yeoman = require('yeoman-generator');

var MyGeneratorGenerator = yeoman.generators.Base.extend({
  templates: function() {
    this.composeWith('common', {});
  }
});

module.exports = MyGeneratorGenerator;
