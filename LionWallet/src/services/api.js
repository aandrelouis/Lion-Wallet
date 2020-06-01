import axios from 'axios';

const api = axios.create({
    baseURL:'https://lionwallet.herokuapp.com/',
});

export default api;