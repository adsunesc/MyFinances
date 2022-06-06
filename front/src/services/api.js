import axios from 'axios';

const api = axios.create({
    baseURL: 'https://myfinancesunesc.herokuapp.com/myfinances'
    // baseURL: 'http://localhost:8080/myfinances'
});

export default api;