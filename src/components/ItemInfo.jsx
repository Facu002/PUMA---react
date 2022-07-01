import React from 'react'
import SizeSelector from './SizeSelector'
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

          <div className="imageContainer">
            <img className='image-Show-Thumb' src={props.imgs[0]} alt='ok'></img>

            <div className="image-Collection">
              <img className='imageShow-Secondary' src={props.imgs[1]} alt="caca" />
              <img className='imageShow-Secondary' src={props.imgs[2]} alt="caca" />
              <img className='imageShow-Secondary' src={props.imgs[3]} alt="caca" />
            </div>
          </div>

          <div className="productInfoContainer">
            <h1 className="productInfo-title">{props.name}</h1>
            <span className='productInfo-price'>${props.price}</span>
            <SizeSelector stock={props.stock} size={props.size}></SizeSelector>
          </div>

          </div>

          {/* <span>{props.description}</span> */}
        </>
        : console.log('nada')
        }   
      </div> 
    )
}

export default ItemInfo