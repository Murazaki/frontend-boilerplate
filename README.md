# Frontend-boilerplate

A little development environment to edit your sass files for a bootstrap project.

## Content

```shell
public/
├── css/                        # CSS files included by gulp
├── fonts/
│   ├── bootstrap/              # Font files included by gulp
│   │   ├── ...
├── js/                         # Javascript files included by gulp
│   ├── ...
├── index.html                  # Little html file to test your Bootstrap theme
src/
├── js/                         # Javascript files to be checked (via JSHint) and to be minified ("scripts" gulp task)
├── scss/                       # SCSS files to be precompiled, concatenated and minified ("sass" gulp task)
│   ├── theme/
│   │   ├── _theme.scss         # You can include any Bootstrap theme here
│   │   ├── _variables.scss     # and its variable file
│   ├── _mixins.scss            # You can add your mixins here
│   ├── _theme-custom.scss      # You can make overloaded modifications of the Bootstrap theme here
│   ├── _variables-custom.scss  # You can make overloaded modifications of the Bootstrap variables here
│   ├── main.scss               # main SCSS file that import every other files already here (to be compiled by gulp)
```

## Installation

Be sure to have [node](https://nodejs.org/) installed.

First, you need to prepare the node environment.
For this, you need to install Gulp globally.
```shell
$ npm install -g gulp
```

Then you need to move to the frontend-boilerplate root directory, and install the node packages :
```shell
$ cd /the_path_to/frontend-boilerplate/
$ npm install
```

## How to use

You can launch the whole tasks by typing :
```shell
$ gulp all:watch            # Launches every other tasks in the gulpfile
```

You can also launch a particular task if you need it :
```shell
$ gulp sass                 # Launches one precompilation of the SCSS files
$ gulp scripts              # Launches one check/minification of the JS files
$ gulp bootstrap-fonts      # Launches one precompilation of the SCSS files
$ gulp bootstrap-js         # Launches one precompilation of the SCSS files
$ gulp sass:watch           # Continually watches the SCSS files for modifications and precompiled them if needed
$ gulp scripts:watch        # Continually watches the JS files for modifications and precompiled them if needed
```
