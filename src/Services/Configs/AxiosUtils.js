import axios from 'axios'
let BASE_URL = '';
if(process.env.REACT_APP_SERVER_ENV==='Local'){
    BASE_URL = process.env.REACT_APP_LOCAL_API_URL;
}else if(process.env.REACT_APP_SERVER_ENV==='Live'){
    BASE_URL = process.env.REACT_APP_LIVE_API_URL;
}
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


