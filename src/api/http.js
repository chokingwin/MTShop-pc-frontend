import Config from './config';
import axios from './m-axios';

class Http {
    constructor() {
        this.baseRequestUrl = Config.restUrl;
    }

    request(params) {
        params.url = this.baseRequestUrl + params.url;

        if (!params.type) {
            params.type = 'get';
        }

        if (params.type === 'post') {
            this.post(params);
        } else {
            this.get(params);
        }
    }

    post(params) {
        axios.post(params.url, params.params).then(function (response) {
            params.sCallback && params.sCallback(response.data);
        }).catch(function (error) {
            params.eCallback && params.eCallback(error.response);
        });
    }

    get(params) {
        axios.get(params.url, params.params).then(function (response) {
            params.sCallback && params.sCallback(response.data);
        }).catch(function (error) {
            params.eCallback && params.eCallback(error.response);
        });
    }
}

export default new Http()
