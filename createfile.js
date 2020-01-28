var fs = require('fs');
var dir = '/home/ajay/ttt';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}