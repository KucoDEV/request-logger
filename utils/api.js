const axios = require('axios');

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des données: ${error.message}`);
    }
}

module.exports = { fetchData };