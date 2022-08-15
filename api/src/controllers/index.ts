import axios from "axios";

import { values, itemsApi, itemDetail } from "../interfaces";


//solicitud para mi busqueda por query
export const searchItems = async (name: string) => {
  //realizo mi solicitud a mi endpoint
  const infoApi = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${name}`);
  
  try {
    const productos = await infoApi.data
    //me creo una constante para mi objeto author
    const author = {
      name: "Agostina",
      lastname: "Gavilan",
    };

    //otra para catergorias
    const category =
      (productos.filters.length) &&
      (productos.filters.map((el: { id: string; values: values[] }) => 
        el.id === "category" &&
          el.values.map((c) =>
            c.path_from_root.map((a: { name: string }) => a.name).toString().split(",")
          ).toString().split(",")
      )).toString().split(",");

    //y otra para la info que necesito de mis items 
    const items = await productos.results.slice(0, 4).map((el: itemsApi) => {
      return {
        id: el.id,
        title: el.title,
        price: {
          currency: el.prices.prices[0].currency_id,
          amount: el.prices.prices[0].amount,
          decimals: Number.parseFloat(new Intl.NumberFormat("es-AR").format(el.price)),
        },
        picture: el.thumbnail,
        condition: el.condition,
        free_shipping: el.shipping.free_shipping,
      };
    });

    return { //al final, retorno las constantes en un objetito
        author, category, items
    }
  } catch (e) {
    console.log(e);
  }
};

export const idItem = async (id: string) => {
  const rtaApi = await axios.get(`https://api.mercadolibre.com/items/${id}`)
  const description = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
  
  try {
      if(rtaApi && description) {
        const product = await rtaApi.data
        const productDescription = await description.data
        const infoProduct: itemDetail = {
          author: {
            name: "Agostina",
            lastname: "Gavilan",
          },
          item: {
            id: product.id,
            title: product.title,
            price: {
              currency: product.currency_id,
              amount: product.price,
              decimals: Number.parseFloat(new Intl.NumberFormat("es-AR").format(product.price))
            }
          },
          picture: product.thumbnail,
          condition: product.condition,
          free_shipping: product.shipping.free_shipping,
          sold_quantity: product.sold_quantity,
          description: productDescription.plain_text
        }
  
        return infoProduct
      } else {
        return("No hay un producto con ese id")
    }
  } catch (e) {
    console.log(e)
  }

}




