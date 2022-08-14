import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    return (
        <Link to={`/item/${props.index}`} className='item-container'>
            <img src={props.img[0]} alt={props.key} />
            <h1>{props.name}</h1>
        </Link >
    )
}

export default Item