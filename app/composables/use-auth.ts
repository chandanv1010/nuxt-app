import type { TAuthRequest } from "~/pages/backend/login.vue";
import { authService } from "~/services/auth/auth.service";
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router';
import { ref } from "vue";
import { DASHBOARD, ADMIN } from "~/config/const";
import { AxiosError } from "axios";
import type { IApiMessage } from "~/interfaces/base.interface";

export const useAuth = () => {
    const router = useRouter()
    const isLoading = ref<boolean>(false)

    const authenticate = async (payload: TAuthRequest) => {
        isLoading.value = true
        try {
            const response = await authService.login(payload)
            const authStore = useAuthStore()
            authStore.login(response.data)
            toast.success('Đăng nhập vào hệ thống thành công')
            router.push(DASHBOARD)
            
        } catch (error) {
            console.error('Login Failed: ', error)
        } finally {
            isLoading.value = false
        }
    }

    const signout = async () => {
        try {
            const authStore = useAuthStore()
            const response = await authService.logout()
            if(response.status){
                authStore.logout()
                router.push(ADMIN)
            }
        } catch (error) {
            if(error instanceof AxiosError){
                const axiosError = error as AxiosError<IApiMessage>
                const errorMessage = error.response?.data.message || 'Đăng xuất không thành công'
                console.error('Login không thành công: ', axiosError)
            }else{
                console.error('Signout Failed: ', error)
                toast.error('Lỗi không xác định')
            }
        }
    }
  
    return {    
        isLoading,
        authenticate,
        signout,
    }


}