import { defineStore } from 'pinia'
import type { IUser, IAuthSuccessResponse } from '~/interfaces/user.interface'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: null as string | null,
        expiresAt: null as number | null,
        issueAt:null as number | null,
        user: null as IUser | null
    }),
    getters: {
        isAuthenticated: (state) => {
            const { accessToken, issueAt, expiresAt } = state
            if(!accessToken || !expiresAt || !issueAt) return false

            const currentTime = Date.now()
            const expiryTime = issueAt + expiresAt * 1000

            return currentTime < expiryTime
        }
    },
    actions: {
        login(authData: IAuthSuccessResponse){
            this.accessToken = authData.accessToken
            this.expiresAt = authData.expiresAt
            this.user = authData.user
            this.issueAt = Date.now()
        },
        logout(){
            this.accessToken = null
            this.expiresAt = null
            this.user = null
            this.issueAt = null
        }
    },
    persist: true
})
