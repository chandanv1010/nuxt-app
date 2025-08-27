<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import AppPerpage from './AppPerpage.vue';
import Input from '../ui/input/Input.vue';
import Button from '../ui/button/Button.vue';
import { Search } from 'lucide-vue-next';
import type { IFilter } from '~/config/data';
import { ref } from 'vue';



const props = defineProps<{
    filters: IFilter[],
    onFilterChange: (filters: Record<string, string>) => void
}>()

const filterValues = ref<Record<string, string>>({})

const handleFilterChange = (value: string, field: string) => {
    filterValues.value = {
        ...filterValues.value,
        [field]: value
    }
}

const handleSearch = () => {
    props.onFilterChange(filterValues.value)
}


</script>

<template>
    <form @submit.prevent="handleSearch">
        <div class="mb-[20px] flex gap-4">
            <AppPerpage 
                :on-perpage-change="handleFilterChange"
            />

            <Select 
                @update:model-value="(value) => handleFilterChange(value, filter.key)"
                v-for="filter in filters" :key="filter.key" class="text-start" :default-value="filter.defaultValues ?? '0'"
            >
                <SelectTrigger class="w-[180px]">
                <SelectValue :placeholder="filter.placeholder" />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>{{ filter.placeholder }}</SelectLabel>
                    <SelectItem v-for="option in filter.options" :key="option.value" :value="option.value"> 
                        {{ option.label }}
                    </SelectItem>
                </SelectGroup>
                </SelectContent>
            </Select>

            <div class="flex w-full max-w-sm items-center space-x-2">
                <Input 
                    type="text"
                    placeholder="Nhập vào từ khóa muốn tìm kiếm..."
                    class="text-[14px] w-[250px]"
                    @update:model-value="(value) => handleFilterChange(value.toString(), 'keyword')"
                />
                <Button class="rounded-[5px] cursor-pointer font-light h-[38px]">
                    <Search />
                </Button>
            </div>
        </div>
    </form>

</template>