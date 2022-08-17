import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PropsItems } from '../../types'
import { itemDetail } from '../../interface'

export default function Detail({category}: PropsItems) {
  const [product, setProduct] = useState<itemDetail>()
  const {id} = useParams()

  async function getDetail (id: string) {
    const { data } = await axios.get(`http://localhost:3001/api/items/${id}`)
    const rta = await data
    setProduct(rta)
  }

  useEffect(() => {
    getDetail(id!)
    console.log("soy product: ", product)
  }, [])



  return (
    <div>
      <div>
        {category && category.includes("false") ? category.pop() : category && category.join(' > ')}
      </div>
      {product && 
      <div>
        <div>
          <img src={product.picture} alt="product" />
          <aside>
            <p>{product.condition} - {product.sold_quantity} vendidos</p>
            <p>{product.item.title}</p>
            <p>${product.item.price.decimals}</p>
            <button>comprar</button>
          </aside>
        </div>
        {product.description}
      </div>

      }
    </div>
  )
}
