const { logMessage } = require("./utils/logger");
const { fetchData } = require("./utils/api");

async function processRequest(url) {
    logMessage(`Requête envoyée à ${url}`);
    try {
        const data = await fetchData(url);
        logMessage(`Données reçues avec succès`);
        return data;
    } catch (error) {
        logMessage(`Erreur: ${error.message}`);
        throw error;
    }
}

module.exports = processRequest;