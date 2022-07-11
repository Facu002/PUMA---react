import React, { useState } from 'react'
import SizeSelector from './SizeSelector'
import ImageGallery from './ImageGallery'
function ItemInfo(props) {
  
  return (
      <div className='itemDetail'>
        { 
        props.imgs  ?
                    
          <>
          <div className="itemPrimaryInfoContainer">
            
          <div className="productInfoContainer-mobile">
            <h1 className="productInfo-title">{props.name}</h1>
            <span className='productInfo-price'>${props.price}</span>

          </div>

            <ImageGallery imgs={props.imgs}/>
          

          <div className="productInfoContainer">
            <h1 className="productInfo-title">{props.name}</h1>

            <div className="productPrice">
            <span className='productInfo-price'>${props.price}</span>
            <span>6 cuotas sin interes a <br></br> <strong>${Math.round(props.price/6)}</strong></span>
            </div>

            <div className="productPurchase">
              <SizeSelector stock={props.stock} size={props.size}></SizeSelector>
              <button>COMPRAR</button>
            </div>

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