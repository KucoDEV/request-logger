# 📦 Request Logger

## Description
`request-logger` est un package npm permettant de journaliser les requêtes et récupérer des données depuis une API tout en enregistrant les logs dans un fichier local.

## 📌 Fonctionnalités
- 📜 **Journalisation des requêtes** dans un fichier `logs.txt`
- 🌍 **Récupération de données API** via `axios`
- 🔧 **Facile à utiliser et à intégrer** dans n'importe quel projet Node.js

## 🚀 Installation
Assurez-vous d'avoir Node.js installé, puis exécutez :

```sh
npm install @kucodev/request-logger
```

## 🛠️ Utilisation

```javascript
const processRequest = require("@kucodev/request-logger");

processRequest("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log("Données reçues:", data))
    .catch(err => console.error("Erreur:", err));
```

## 📂 Structure du projet
```
request-logger/
│── utils/
│   ├── logger.js        # Gère la journalisation des événements
│   ├── api.js           # Récupère des données API avec Axios
│── index.js             # Point d'entrée du package
│── package.json         # Métadonnées et dépendances
│── README.md            # Documentation du package
│── logs.txt             # Fichier généré pour stocker les logs
```

## 📜 Licence
Ce projet est sous licence **MIT**.

