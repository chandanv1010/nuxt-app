import { PiniaCustomProperties } from "pinia";
import type { PersistedStateOptions }  from 'pinia-plugin-persistedstate'

declare module 'pinia' {
    export interface DefineStoreOptionBase<S, Store> {
        persist?: PersistedStateOptions | boolean
    }
}