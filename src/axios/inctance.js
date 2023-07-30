import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev',
    headers: {
        'X-API-KEY': 'ZGHS87G-66M48GN-K14QT4Z-KTPT3YV'
    }
});
export default instance;