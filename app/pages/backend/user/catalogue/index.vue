<script lang="ts" setup>
import CardLoading from '~/components/custom/CardLoading.vue';
import AppPagination from '~/components/custom/AppPagination.vue';
// import type { IConfig } from '~/interfaces/base.interface';
import AppTable from '~/components/custom/AppTable.vue';
import AppFilter from '~/components/custom/AppFilter.vue';
import { ref } from 'vue';
import { commonFilter, type IFilter } from '~/config/data';
import { publish } from '~/config/data';

definePageMeta({
    layout: 'backend-master'
})

const isLoading = ref<boolean>(false)


export interface IConfig {
    title: string,
    description: string,
    filter: IFilter[]
}

const config: IConfig = {
    title: 'Quản lý nhóm thành viên',
    description: 'Bảng quản lý thông tin chi tiết danh sách nhóm thành viên',
    filter: [...commonFilter]
}

const handleFilterChange = (filters: Record<string, string>) => {
    console.log('Filters: ', filters.keyword);  
}

</script>
  
<template>
    <div class="flex flex-1 flex-col gap-4 p-4 bg-[#f3f3f4] pt-[20px]">
        <CardLoading
            :show-header="true"
            :show-footer="true"
            :title="config.title"
            :description="config.description"
            :loading="isLoading"
        >
            <AppFilter 
                :filters="config.filter"
                :on-filter-change="handleFilterChange"
            />
            <AppTable />


            <template #footer>
                <AppPagination />
            </template>
        </CardLoading>
    </div>

</template>