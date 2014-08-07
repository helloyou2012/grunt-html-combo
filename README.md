# grunt-html-combo

> JS and CSS combo into html.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html-combo --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html-combo');
```

## The "html_combo" task

### Overview
In your project's Gruntfile, add a section named `html_combo` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html_combo: {
    build: {
      expand: true,
      cwd: 'demo',
      src: ['**/*.html'],
      dest: '<%= buildBase %>'
    }
  }
});
```

### Usage Examples

In this example, `demo/**/*.html` will be combo to `buildBase`.

```js
grunt.initConfig({
  html_combo: {
    build: {
      expand: true,
      cwd: 'demo',
      src: ['**/*.html'],
      dest: '<%= buildBase %>'
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
