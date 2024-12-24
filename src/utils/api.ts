import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    // headers: {
    //     "Content-Type": "application/json"
    // }
})

// untuk memasukan token ke headers api
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if(token) {
            if(config.headers){
                config.headers["Authorization"] = `Bearer ${token}`
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// // Interceptor untuk response - menangani error
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         console.log(error.response);
        
//       if (error.response && error.response.status === 401) {
//         console.error("Token expired, logging out...");
//         localStorage.removeItem('token')
//       }
//       return Promise.reject(error);
//     }
// );

export default api