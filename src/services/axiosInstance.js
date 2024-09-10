import axios from "axios"

const API = axios.create({ baseURL: `http://lamp3.ncaa.gov.ng/` });
API.interceptors.request.use((req) => {
  // Get the token dynamically on each request
  const token = JSON.parse(localStorage.getItem('communeety-auth-session'))?.state?.userData?.token;

  req.headers['token'] = token || '';
  req.headers['Content-type'] = 'application/json';
  req.headers["Accept"] = 'application/json';
  return req;
});
export default API;