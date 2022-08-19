import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PropsItems } from '../../types'
import { itemDetail } from '../../interface'
import './_detail.scss'

export default function Detail({category}: PropsItems) {
  const [product, setProduct] = useState<itemDetail>()
  const {id} = useParams()

  async function getDetail (id: string) {
    const { data } = await axios.get(`/api/items/${id}`)
    const rta = await data
    setProduct(rta)
  }

  useEffect(() => {
    getDetail(id!)
    console.log("soy product: ", product)
  }, [])

  if(product === null || product === undefined) {
    return (
      <div className="spiner">
      </div>
  )
  }



  return (
    <div className="detail-container">
      <div className="detail-header">
        {category && category.includes("false") ? category.pop() : category && category.join(' > ')}
      </div>
      <div className='box-detail'>
        {product && 
          <div className="card-detail">
            <div className='left-side-detail'>
              <div className='picture-detail-box'>
                <img src={product.picture} alt="product" className='picture-detail'/>
              </div>
              <div>
                <p className='description-title'>Descripción del producto</p>
                <p className='description'>
                  {product.description}
                </p>
              </div>
            </div>
            <div className='right-side'>
                <p className='condition-sold'>{product.condition.charAt(0).toUpperCase()}{product.condition.slice(1)} - {product.sold_quantity} vendidos</p>
                <p className='title-detail'>{product.item.title}</p>
                <p className='price-detail'>
                  $ {product.item.price.decimals.toString().includes('.') 
                      ? product.item.price.decimals.toFixed(3)
                    : product.item.price.decimals}
                  </p>
                <button className='button-detail'>Comprar</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
