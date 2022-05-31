import React from 'react'

function Item(props) {
    return (
        <div className='item-container'>
            <img src={props.img[0]} alt={props.key} />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Item