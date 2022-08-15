interface pfr {
    id: string;
    name: string;
  }
  
export interface values {
    id: string;
    name: string;
    path_from_root: pfr[];
  }
  
  interface p {
    currency_id: string;
    amount: number;
    decimals?: number;
  }
  
  interface ps {
    prices: p[];
  }
  
  interface fs {
    free_shipping: boolean;
  }
  
export interface itemsApi {
    id: string;
    title: string;
    price: number;
    prices: ps;
    thumbnail: string;
    condition: string;
    shipping: fs;
  }