import { NavLink } from 'react-router-dom';

import { PropsCards } from "../../types";
import delivery from "../../Assets/ic_shipping.png"
import './_cardItems.scss'

export default function CardItems({key, id, title, price, condition, picture, free_shipping, adress}: PropsCards) {
  return (
    <NavLink to={`/items/${id}`} className="nav-link">
        <div className='card_container'>
                <div className='left_side'>
                    <div className='product-pic-box'>
                        <img src={picture} alt="imagen" className='product-pic'/>
                    </div>
                    <div className='left_side_rigth'>
                        <div className='price-and-fs'>
                            <p className='price'>$ {price}</p>
                            {free_shipping && 
                            <img src={delivery} alt="shipping" className='img-shipping'/>}
                        </div>
                        <p className='title'>{title}</p>
                    </div>
                </div>
                <div className='rigth_side'>
                    {adress}
                </div>
        </div>
    </NavLink>
  )
}
