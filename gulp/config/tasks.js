const fs = require('fs'), /* fileSystem модуль встроенный в nodejs */
    path = './gulp/tasks',
    arrayPathFills = fs.readdirSync(path).map(item => item = path + '/' + item)
    module.exports = arrayPathFills;
