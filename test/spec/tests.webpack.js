require('core-js');
require('core-js/es5');
require('babel-polyfill');

require('app');
require('angular-mocks');

const context = require.context('./', true, /-test\.js$/);
context.keys().forEach(context);
