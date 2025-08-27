interface IBaseResponse {
    status: boolean,
    code: number,
    message: string,
    timestamp: string
}

export interface IApiOk<T> extends IBaseResponse {
    data: T
}

export interface IApiError<E> extends IBaseResponse {
    errors: E
}

export type TUnprocessableEntity<P> = {
    [key in keyof P]: string[] 
}

export interface IApiMessage extends IBaseResponse{

}

export type TApiResponse<T, E> = IApiOk<T> | IApiError<E> | IApiMessage

export type TApiErrorOrMessage<E> = IApiError<E> | IApiMessage

export type TLink = {
    url: null | string,
    label: string,
    isActive: boolean
}

export interface IPaginate<T>{
    current_page: number,
    data: T[],
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: TLink[],
    next_link_url: string,
    path: string,
    per_page: number,
    prev_link_url: string,
    to: number,
    total: number
}

