import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('token');
const instance = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
  //  withCredentials: true,
});
export default instance;