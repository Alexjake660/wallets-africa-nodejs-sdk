import axios from 'axios';

/**
 *  All Airtime functionality and methods
 * @class Airtime
 */
class Airtime {
    /*
        Api key
     */
    static secretKey = '';

    static endpoint = '/bills/airtime';

    /*
        Returns a list of all airtime providers
     */
    static async airtimeProviders() {
        const body = {SecretKey: this.secretKey};
        const url = `${this.endpoint}/providers`;

        return axios.post(url, body);
    }

    /*
        Purchase airtime against the phone number supplied
     */
    static async airtimePurchase(options: {Code: string; Amount: string; PhoneNumber: string}) {
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/purchase`;

        return axios.post(url, body);
    }
}

export default Airtime;
