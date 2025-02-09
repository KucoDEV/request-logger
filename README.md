# 📦 Request Logger

## Description
`request-logger` is an npm package that allows logging requests and retrieving data from an API while storing logs in a local file.

## 📌 Features
- 📜 **Request logging** in a `logs.txt` file
- 🌍 **API data retrieval** via `axios`
- 🔧 **Easy to use and integrate** into any Node.js project

## 🚀 Installation
Make sure you have Node.js installed, then run:

```sh
npm install @kucodev/request-logger
```

## 🛠️ Usage

```javascript
const processRequest = require("@kucodev/request-logger");

processRequest("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log("Received data:", data))
    .catch(err => console.error("Error:", err));
```

## 📂 Project Structure
```
request-logger/
│── utils/
│   ├── logger.js        # Handles event logging
│   ├── api.js           # Retrieves API data using Axios
│── index.js             # Package entry point
│── package.json         # Metadata and dependencies
│── README.md            # Package documentation
│── logs.txt             # Generated file to store logs
```

## 📜 License
This project is licensed under the **MIT** license.
