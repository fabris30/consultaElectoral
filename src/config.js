import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('token');
const instance = axios.create({
 // baseURL: 'https://electoralapp.onrender.com/api/v1',
 baseURL: 'https://electorappcontrol.vercel.app/api/v1',
 
  //  withCredentials: true,
});
export default instance;