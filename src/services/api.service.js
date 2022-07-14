const axios = require('axios').default;

class ApiServiceLab {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-countries-api.herokuapp.com/countries',
            
        });
    }
    getAllCountries = () => {
        return this.api.get('');
        };
}

module.exports = ApiServiceLab