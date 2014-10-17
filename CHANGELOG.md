# Change Log

## Version 0.4.0 - Oct.17.2014

### Updates
* Changed folder structure to more closely resemble a Relish project (probably more work to be done here)
* Changed build sequence because of the above
* Changed sprite generator to output to the /scripts/ folder by default, but allowing the user to specify a directory; the previous generator required that all non-state classes be generated in the /scripts/prefabs/ base folder
* Removed unneccessary classes and assets
* Removed /scripts/prefabs directory


## Version 0.3.0 - Oct.14.2014

### New Features

* Full ECMAScript 6 support by Traceur
* Sourcemap of scripts generated automatically for development

### Updates

* `es6-module-transpiler` replaced by Traceur built-in module system
* Almond replaced by `System.get()`
* Experimental class system deprecated since es6 class system is prefered
* Rename `scene` to `state`
