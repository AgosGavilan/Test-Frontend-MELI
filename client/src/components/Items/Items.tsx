import { PropsItems } from "../../types";
import CardItems from "../CardItems/CardItems";

function Items ({items, category}: PropsItems) {

    return (
        <div>
            <div>
            {category && category.includes("false") ? category.pop() : category && category.join(' > ')}
            </div>
            <section>
                {items && items.map(el => {
                    return (<CardItems
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        price={el.price.decimals}
                        condition={el.condition}
                        picture={el.picture}
                        free_shipping={el.free_shipping}
                        adress={el.adress}
                         />)
                })}
            </section>
           
        </div>
    )
}

export default Items