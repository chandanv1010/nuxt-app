<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LoginImage from '@/assets/img/placeholder.svg'
import { Field, Form, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useForm } from 'vee-validate'
import { authService } from '~/services/auth/auth.service';
import { useAuthStore } from '#imports';
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router';
import { useAuth } from '#imports';
import LoadingButton from '~/components/custom/LoadingButton.vue';

definePageMeta({
    middleware: 'no-auth'
})

const router = useRouter()

const schema = z.object({
    email: z.string({required_error: 'Bạn chưa nhập vào Email'}).email({message: 'Email không hợp lệ'}),
    password: z.string({required_error: 'Bạn chưa nhập vào Mật khẩu'}).min(6, {message: 'Mật khẩu phải có tối thiểu 6 ký tự'}),
})

export type TAuthRequest = z.infer<typeof schema>

const { isFieldDirty, handleSubmit } = useForm<TAuthRequest>({
    validationSchema: toTypedSchema(schema),
})

const { isLoading, authenticate } = useAuth()

const handleLogin = handleSubmit(authenticate)
 
</script>

<template>
    <form @submit="handleLogin">
        <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div class="flex items-center justify-center py-12">
            <div class="mx-auto grid w-[350px] gap-6">
                <div class="grid gap-2 text-center">
                <h1 class="text-3xl font-bold">
                    Login
                </h1>
                <p class="text-balance text-muted-foreground">
                    Enter your email below to login to your account
                </p>
                </div>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <FormField v-slot="{ componentField }" name="email">
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                <Input type="text" placeholder="Nhập vào email" autocomplete="off" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>
                    <div class="grid gap-2">
                            <FormField v-slot="{ componentField }" name="password">
                            <FormItem>
                                <div class="flex items-center">
                                    <FormLabel>Mật khẩu</FormLabel>
                                    <a
                                        href="/forgot-password"
                                        class="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                
                                <FormControl>
                                    <Input type="password" autocomplete="off" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>

                    <LoadingButton
                        :loading="isLoading"
                        :type="'submit'"
                    >
                        Đăng nhập
                    </LoadingButton>

                </div>
                <div class="mt-4 text-center text-sm">
                Don't have an account?
                <a href="#" class="underline">
                    Sign up
                </a>
                </div>
            </div>
            </div>
            <div class="hidden bg-muted lg:block">
            <img
                :src=LoginImage
                alt="Image"
                width="1920"
                height="1080"
                class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            >
            </div>
        </div>
    </form>
  
</template>

