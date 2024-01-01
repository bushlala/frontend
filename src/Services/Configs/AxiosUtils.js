import axios from 'axios'
//import { RM_BASE_URL } from "../../../ReactConfig";

// const BASE_URL = 'http://localhost:3001/';
const BASE_URL = 'http://13.200.209.97:3001/';

// Here config for response master api
export const apiConfig = axios.create({
    baseURL: `${BASE_URL}api/`,
    /*withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }*/ 
})

// registering the custom error handler to the
// "rmApiConfig" axios instance
apiConfig.interceptors.response.use(
    (response) => response,

    (error) => {
        return errorHandler(error)
    }
)


// defining a custom error handler for all APIs
const errorHandler = (error) => {
    if (error.code === 'ECONNABORTED') {
        console.error('Request timed out');
    }
    const statusCode = error.response?.status
    //console.error("statusCode", statusCode);
    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error("Ganesh Check ", error)
    }

    return Promise.reject(error)
}


