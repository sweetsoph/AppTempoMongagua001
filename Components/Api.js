import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api.hgbrasil.com/',
});
//weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=c61a605c&city_name=mongagua,SP
export default Api;