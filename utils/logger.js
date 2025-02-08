const fs = require('fs');
const path = require('path');

function logMessage(message) {
    const logPath = path.join(__dirname, '../logs.txt');
    const timestamp = new Date().toISOString();
    fs.appendFileSync(logPath, `[${timestamp}] ${message}\n`, 'utf8');
}

module.exports = { logMessage };