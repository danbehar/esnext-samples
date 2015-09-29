require('babel/register');
var module = process.argv[2];
console.log('module is ' + module);
require(module);