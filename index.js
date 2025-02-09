const { logMessage } = require("./utils/logger");
const { fetchData } = require("./utils/api");

async function processRequest(url) {
    logMessage(`Request sent to ${url}`);
    try {
        const data = await fetchData(url);
        logMessage(`Data received successfully`);
        return data;
    } catch (error) {
        logMessage(`Error: ${error.message}`);
        throw error;
    }
}

module.exports = processRequest;