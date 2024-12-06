import axios, { AxiosInstance } from "axios";


const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        "Content-Type": "application/json"
    }
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

export default api