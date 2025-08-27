import { ofetch } from 'ofetch'
import { useAuthStore } from '#imports'

export default defineNuxtPlugin(() => {
    const privateApi = ofetch.create({
        baseURL: 'http://127.0.0.1:8000/api',
        async onRequest({request, options}){
            const authStore = useAuthStore()
            const accessToken = authStore.accessToken
            if(!accessToken){
                console.error('Không tìm thấy AccessToken Hợp lệ')
                throw new Error('Không tìm thấy AccessToken hợp lệ')
            }   
            options.headers.set('Authorization', `Bearer ${accessToken}`)
        }
    })

    const publicApi = ofetch.create({
        baseURL: 'http://127.0.0.1:8000/api'
    })

    return {
        provide: {
            privateApi,
            publicApi
        }
    }
})