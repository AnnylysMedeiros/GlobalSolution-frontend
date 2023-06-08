import axios from 'axios';

const api = axios.create({
    baseURL: 'globalsolution-backend-production.up.railway.app'
})
 
export default api;