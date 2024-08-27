import axios from 'axios';

const cryptoApi = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com',
    headers: {
        'X-CMC_PRO_API_KEY': process.env.CRYPTO_KEY
    },
});

export default cryptoApi;