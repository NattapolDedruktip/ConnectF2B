import axios from "axios";


const ACCESS_TOKEN = "ACCESS_TOKEN";

// add data to local storage
const addAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

const BACKEND_URL = "http://localhost:5000";

axios.defaults.baseURL = BACKEND_URL;

// axios interceptors เอาไว้เป็นตัวกรองในการเช็ค header authorization โดยที่เราไม่ต้องไปเซ็ตค่าให้มันในแต่ละ api
axios.interceptors.request.use((config) => {
    // get data from local storage 
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
        // remove data from local storage
      removeAccessToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);


// export default axios