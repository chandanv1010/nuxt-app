import { useAuthStore } from "#imports"
import { DASHBOARD } from "~/config/const"


export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    const { isAuthenticated } = authStore
    if(isAuthenticated){
        return navigateTo(DASHBOARD)
    }
})
