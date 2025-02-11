import axios from 'axios';

/**
 * @class Self
 * All self functionality and methods based on api
 * {@link https://https://documenter.getpostman.com/view/10058163/SWLk4RPL?version=latest#90e5b45a-9ae1-4eaa-85ae-9aa569835bdb View Api Docs}
 */
class Self {
    /*
        Api keys
     */
    static secretKey = '';

    static endpoint = '/self';

    /**
     * To get balance of account in different currency
     *
     * @param currency - currency to get balance in
     */
    static async checkBalance(currency: currencyType = 'NGN') {
        const body = {currency, SecretKey: this.secretKey};
        const url = `${this.endpoint}/balance`;

        return axios.post(url, body);
    }

    /**
     * Retrieves and returns a list of performed transactions within a specified time period
     *
     */
    static async transactions(options: TransactionOptions = {}) {
        const body = {...options, SecretKey: this.secretKey, currency: 'NGN'};
        const url = `${this.endpoint}/transactions`;

        return axios.post(url, body);
    }

    /**
     * Retrieves and returns a list of users
     */
    static async getWallets() {
        const body = {SecretKey: this.secretKey};
        const url = `${this.endpoint}/users`;

        return axios.post(url, body);
    }
}

export default Self;
