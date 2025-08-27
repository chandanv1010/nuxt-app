<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { perpage } from '~/config/data';



const props = defineProps<{
    onPerpageChange: (value: string, field: string) => void
}>()


</script>

<template>
    <div class="flex">
        <Select class="text-start" :default-value="'20'" @update:model-value="(value) => onPerpageChange(value, 'perpage')">
            <SelectTrigger class="w-[120px]">
            <SelectValue placeholder="Chọn số bản ghi" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectLabel>Chọn số bản ghi</SelectLabel>
                <SelectItem v-for="item in perpage" :key="item" :value="item.toString()"> 
                    {{ item }} bản ghi
                </SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>
    </div>

</template>