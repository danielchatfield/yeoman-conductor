/*
 * yeoman-conductor
 * https://github.com/danielchatfield/yeoman-conductor
 *
 * Copyright (c) 2013 Daniel Chatfield
 * Licensed under the MIT license.
 */

'use strict';
var yeoman = require('yeoman-generator')();

var conductor = module.exports;

yeoman.alias(/^([^:]+)$/, '$1:all');
yeoman.alias(/^([^:]+)$/, '$1:app');
yeoman.lookup('*:*');

/**
 * Public Yeoman Generator runner
 * @param {generator} generator   The generator instance to run.
 * @param {Function} cb           The callback to be called when complete.
 */

conductor.run = function( generator, args, cb ) {
    if(!generator) {
        return new Error( "No generator suppllied to conductor.run" );
    }

    if(typeof args === 'function') {
        cb = args;
        args = [];
    }

    args.unshift(generator);

    cb = cb || function(){};

    return yeoman.run(args, cb);
};