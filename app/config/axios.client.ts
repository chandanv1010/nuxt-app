import type { AxiosError, AxiosInstance } from "axios";
import axios from "axios";
import { useAuthStore } from "#imports";

export default defineNuxtPlugin(() => {
    // const publicApi: AxiosInstance = axios.create({
    //     baseURL: 'http://127.0.0.1:8000/api',
    //     timeout: 10000,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     withCredentials: true
    // })

    // const privateApi: AxiosInstance = axios.create({
    //     baseURL: 'http://127.0.0.1:8000/api',
    //     timeout: 10000,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     withCredentials: true
    // })

    // privateApi.interceptors.request.use(
    //     (config) => {
    //         const { accessToken  } = useAuthStore()
    //         if(!accessToken){
    //             return Promise.reject(new Error('Không tìm thấy AccessToken hợp lệ'))
    //         }
    //         config.headers.Authorization = `Bearer ${accessToken}`
            
    //         // if(import.meta.client && config.data instanceof FormData){
    //         //     config.headers["Content-Type"] = 'multipart/form-data'
    //         // }
    //         return config
    //     },
    //     (error) => Promise.reject(error)
    // )

    // return {
    //     provide: {
    //         publicApi,
    //         privateApi
    //     }
    // }
})
