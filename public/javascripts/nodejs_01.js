var os = require('os');

console.log('hostname : %s', os.hostname());

var path = require('path');

var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('%s', docsDirectory);
