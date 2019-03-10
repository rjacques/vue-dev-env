// this file isn't compiled so must use CommonJs and ES5

//register Babel before our tests run
require('babel-register')();

//disable WebPack features that Mocha doesn't understand
require.extensions['.css'] = function() {};