import qs from 'qs';

const IMGUR_CLIENT_ID = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_PROD_IMGUR_CLIENT_ID : process.env.VUE_APP_IMGUR_CLIENT_ID;
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: IMGUR_CLIENT_ID,
            response_type: 'token',
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    }
};