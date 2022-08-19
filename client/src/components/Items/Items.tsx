import { PropsItems } from "../../types";
import CardItems from "../CardItems/CardItems";
import './_items.scss'

function Items ({items, category}: PropsItems) {

    if(items && items.length <= 0) {
        return (
            <div className="spiner">
            </div>
        )
    }

    return (
        <div className="container">
            <div className="header">
                {category && category.includes("false") ? category.pop() : category && category.join('  >  ')}
            </div>
            <section className="box">
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