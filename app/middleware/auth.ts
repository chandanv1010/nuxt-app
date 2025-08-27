import { useAuthStore } from "#imports"
import { ADMIN } from "~/config/const"


export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    const { isAuthenticated } = authStore
    console.log(isAuthenticated);
    
    if(!isAuthenticated){
        return navigateTo(ADMIN)
    }
})
