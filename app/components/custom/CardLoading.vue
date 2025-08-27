<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Loader, Loader2 } from 'lucide-vue-next';

interface ICardLoadingProps {
    loading?: boolean,
    title?: string,
    description?: string,
    height?: string,
    showHeader?: boolean,
    showFooter?: boolean
}

const props = defineProps<ICardLoadingProps>()

</script>

<template>
 <Card class="relative rounded-[5px] overflow-hidden">
    <CardHeader v-if="props.showHeader" class="border-b">
      <CardTitle>{{ props.title }}</CardTitle>
      <CardDescription>{{ props.description }}</CardDescription>
    </CardHeader>
    <CardContent class="py-[20px]" :class="props.height ?? 'h-48'">
      <slot />
    </CardContent>
    <CardFooter class="flex justify-center" v-if="props.showFooter">
      <slot name="footer" />
    </CardFooter>
    <div v-if="props.loading" class="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-black/40 z-10">
        <Loader2 class="size-8 animate-spin text-muted-foreground" />
    </div>
  </Card>
</template>