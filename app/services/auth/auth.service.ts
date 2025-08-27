// import { publicApi } from "~/config/axios";
import type { IApiOk, IApiMessage, TUnprocessableEntity, IApiError } from "~/interfaces/base.interface";
import type { TAuthRequest } from "~/pages/backend/login.vue";
import type { IAuthSuccessResponse } from "~/interfaces/user.interface";
import type { AxiosInstance } from "axios";


const ENDPOINT = 'v1/auth'

export const authService  = {

    login: async (payload: TAuthRequest) => {
        const { $publicApi } = useNuxtApp()
        const response = await $publicApi<IApiOk<IAuthSuccessResponse>>(`${ENDPOINT}/authenticate`, {
            method: 'post',
            body: payload
        })
        console.log(response);
        
        return response
        
        
    },

    logout: async (): Promise<IApiMessage> => {
        const { $privateApi } = useNuxtApp()
        const response = await $privateApi<IApiMessage>(`${ENDPOINT}/logout`, {
            method: 'post'
        })
        return response
    }
}