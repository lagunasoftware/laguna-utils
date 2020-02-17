const pug = require('pug');
const fs = require('fs');
var params = require('./params');




//Get name of file
var fileName = '';
if (process.argv[2])
    var fileName = process.argv[2] + '.pug';
else
    var fileName = 'index';

const compiledFunction = pug.compileFile(fileName + '.pug');


if (!fs.existsSync('release')){
    fs.mkdirSync('release');
}
fs.writeFileSync('release/' + 'index.html', compiledFunction(params));
