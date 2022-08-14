import React, { useState } from 'react'
import ItemSelectors from './ItemSelectors'
import ImageGallery from './ImageGallery'
import { useContext } from 'react';
import {CartContext} from '../context/Context';
function ItemInfo(props) {
  const [productsInCart, setProductsInCart] = useState(0)

  const context = useContext(CartContext)

  let onAdd = (num, sizeSelected) => {
    setProductsInCart(num)
    context.addItem(props, num, sizeSelected)

}
  return (
      <div className='itemDetail'>
        { 
        props.imgs  ?
                    
          <>
          <div className="itemPrimaryInfoContainer">
            
          <div className="productInfoContainer-mobile">
            <h1 className="productInfo-title">{props.name}</h1>
            <span className='productInfo-price'>$ {props.price}</span>

          </div>

            <ImageGallery imgs={props.imgs}/>

          <div className="productInfoContainer">
            <h1 className="productInfo-title">{props.name}</h1>

            <div className="productPrice">
              <span className='productInfo-price'>$ {props.price}</span>
              <span>6 cuotas sin interes a <br></br> <strong className='strg'>$ {Math.round(props.price/6)}</strong></span>
            </div>

            <div className="productPurchase">
              <ItemSelectors price={props.price} stock={props.stock} size={props.size} onPurchase={onAdd}></ItemSelectors>
            </div>

          </div>

          <div className="productPurchase-mobile">
              <ItemSelectors price={props.price} stock={props.stock} size={props.size} onPurchase={onAdd}></ItemSelectors>
          </div>

          </div>
          <div className="itemSecondaryInfoContainer">
            <span>{props.description}</span>
          </div>
          
          </>
        : console.log('no fetch')
        }   
      </div> 
    )
}

export default ItemInfo