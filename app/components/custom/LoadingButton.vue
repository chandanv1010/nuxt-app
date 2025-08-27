<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import { Loader2 } from 'lucide-vue-next';


interface ILoadingButtonProps {
    loading?: boolean,
    disabled?: boolean,
    type?: 'button' | 'submit' | 'reset',
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link',
    class?: string,
    size?: 'default' | 'sm' | 'lg' | 'icon'
}

const props = defineProps<ILoadingButtonProps>()

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()

</script>


<template>
    <Button
        :type="props.type || 'button'"
        :variant="props.variant || 'default'"
        :size="props.size || 'default'"
        :disabled="props.loading || props.disabled"
        :class="props.class"
        @click="emit('click', $event)"
    >
        <Loader2 
            v-if="props.loading"
            class="mr-2 size-4 animate-spin"
        />
        <slot />
    </Button>

</template>