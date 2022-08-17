interface p {
    amount: number,
    currency: string,
    decimals: number
}

export interface itemsSearch {
    condition: string,
    free_shipping: boolean,
    id: string,
    picture: string,
    price: p,
    title: string,
    adress: string
}

export interface itemDetail {
    item: item,
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string
}

interface item {
    id: string,
    title: string,
    price: p
}