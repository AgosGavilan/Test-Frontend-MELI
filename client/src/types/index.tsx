import { itemsSearch } from "../interface"

export type Props = {
    onSearch: (name:string) => Promise<void>
}

export type PropsItems = {
    items?: itemsSearch[],
    category: string[]
}

export type PropsCards = {
    key: string,
    id: string,
    title: string,
    price: number,
    condition: string,
    picture: string,
    free_shipping: boolean,
    adress: string
}

