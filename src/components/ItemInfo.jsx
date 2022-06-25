import React from 'react'

function ItemInfo(props) {
  if (props !== undefined)
  return (
      <div className='itemDetail'>
        {
        props.imgs  ?
                    
          <>
          <h1>{props.name}</h1>
          <img className='imageShow' src={props.imgs[0]} alt='ok'></img>
          <div className="imageCollection">
            <img className='imageShow' src={props.imgs[1]} alt="caca" />
            <img className='imageShow' src={props.imgs[2]} alt="caca" />
            <img className='imageShow' src={props.imgs[3]} alt="caca" />
          </div>
          <span>{props.description}</span>
        </>
        : console.log('nada')
        }   
      </div> 
    )
  else
    return (
        {props}
      )
  // 
}

export default ItemInfo