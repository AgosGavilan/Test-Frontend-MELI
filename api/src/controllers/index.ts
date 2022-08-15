import axios from "axios";

import { values, itemsApi } from "../interfaces";


//solicitud para mi busqueda por query
const searchItems = async (name: string) => {
  const infoApi = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${name}`);
  //console.log("soy infoApi: ", infoApi.data.results.slice(0, 4).map((el: { title: any }) => el.title))
  //console.log("soy infoApi: ",infoApi.data.filters.map((el: { id: string; values: any[] }) =>el.id === "category" &&el.values.map((c) =>c.map((a: { name: string }) => a.name).toString().split(",")).toString().split(",")).toString().split(","));
  //console.log("soy infoApi: ", infoApi.data.results.slice(0, 4).map((el: { price: number }) => new Intl.NumberFormat('es-AR').format(el.price)))
  try {
    const author = {
      name: "Agostina",
      lastname: "Gavilan",
    };

    const category =
      (await infoApi.data.filters.length) &&
      (await infoApi.data.filters.map((el: { id: string; values: values[] }) => 
        el.id === "category" &&
          el.values.map((c) =>
            c.path_from_root.map((a: { name: string }) => a.name).toString().split(",")
          ).toString().split(",")
      )).toString().split(",");

    const items = await infoApi.data.results.slice(0, 4).map((el: itemsApi) => {
      return {
        id: el.id,
        title: el.title,
        price: {
          currency: el.prices.prices[0].currency_id,
          amount: el.prices.prices[0].amount,
          decimals: new Intl.NumberFormat("es-AR").format(el.price),
        },
        picture: el.thumbnail,
        condition: el.condition,
        free_shipping: el.shipping.free_shipping,
      };
    });

    return {
        author, category, items
    }

  } catch (e) {
    console.log(e);
  }
};

export default searchItems;
