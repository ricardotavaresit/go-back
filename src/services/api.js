const axios = require('axios');

const api = axios.create({
    baseURL:  3333,
});

module.exports = api;