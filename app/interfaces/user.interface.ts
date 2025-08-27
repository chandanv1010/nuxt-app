export interface IUser {
    id: number,
    name: string,
    email: string,
    phone: string | null,
    birthday: string | null,
    publish: number,
    address: string | null,
    image: string | null,
    userCatalogues: number[],
    permissions: string[]
}

export interface IAuthSuccessResponse {
    accessToken: string,
    expiresAt: number,
    user: IUser
}
