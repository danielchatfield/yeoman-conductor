# yeoman-conductor [![Build Status](https://secure.travis-ci.org/danielchatfield/yeoman-conductor.png?branch=master)](http://travis-ci.org/danielchatfield/yeoman-conductor)

A module that let's you run a yeoman generator from another one.

## Getting Started
Install the module with: `npm install yeoman-conductor`

```javascript
var conductor = require('yeoman-conductor');
var oldGenerator = require('generator-something');

conductor.extend(newGenerator, oldGenerator);
```

## Documentation

### conductor.extend(newGenerator, oldGenerator)

## License
Copyright (c) 2013 Daniel Chatfield. Licensed under the MIT license.
