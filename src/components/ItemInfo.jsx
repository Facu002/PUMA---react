import React from 'react'

function ItemInfo(props) {

  return (
    <div className='itemDetail'>
            <h1>{props.name}</h1>
            <img className='imageShow' ></img>
            <div className="imageCollection">
                
            </div>
    </div> 
  )
}

export default ItemInfo