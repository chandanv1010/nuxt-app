// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    // optimizeDeps: { exclude: ['axios', 'form-data'] },
    // ssr: { noExternal: true },
    vite: {
        optimizeDeps: { 
            exclude: [] 
        }
    },
    plugins: ['~/config/axios.client.ts', '~/config/fetch.ts'],
    ssr: false
})