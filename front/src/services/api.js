import axios from 'axios';

const api = axios.create({
    baseURL: 'https://myfinancesunesc.herokuapp.com/myfinances'
});

export default api;