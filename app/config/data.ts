export const perpage = [20, 40, 60, 80, 100, 120, 150, 200, 250, 300, 500]

export interface ISelectOptionItem {
    label: string,
    value: string
}

export interface IFilter {
    key: string,
    placeholder: string,
    options: ISelectOptionItem[],
    defaultValues?: string
}

export const publish: ISelectOptionItem[] = [
    {label: 'Không hoạt động', value: '1'},
    {label: 'Hoạt động', value: '2'},
] 


export const commonFilter: IFilter[] = [
    {
        key: 'publish',
        placeholder: 'Chọn Trạng Thái',
        options: [
            {label: 'Chọn tất cả', value: '0'},
            ...publish.map(item => ({
                label: item.label,
                value: item.value
            }))
        ]
    }
]