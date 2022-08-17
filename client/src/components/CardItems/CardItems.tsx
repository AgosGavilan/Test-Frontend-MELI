import React from 'react'
import { NavLink } from 'react-router-dom';

import { PropsCards } from "../../types";
import delivery from "../../Assets/ic_shipping.png"

export default function CardItems({key, id, title, price, condition, picture, free_shipping, adress}: PropsCards) {
  return (
    <div>
        <NavLink to={`/items/${id}`}>
            <div>
                <img src={picture} alt="imagen" />
                <p>{price}</p>
                    {free_shipping && <img src={delivery} alt="shipping" />}
                <p>{title}</p>
                <aside>
                    {adress}
                </aside>
            </div>
        </NavLink>
    </div>
  )
}
