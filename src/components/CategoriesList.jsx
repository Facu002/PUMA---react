import React from 'react'
import { NavLink } from 'react-router-dom';

function CategoriesList(props) {
    if (props.show === true) {
        return (
            <li className='Category-List'>
                <NavLink className={(navData) => navData.isActive ? "CurrentCategory" : "Side-Item"} to="category/footwear">Calzado</NavLink>
                <NavLink className={(navData) => navData.isActive ? "CurrentCategory" : "Side-Item"} to="category/clothes" >Ropa</NavLink>
                <NavLink className={(navData) => navData.isActive ? "CurrentCategory" : "Side-Item"} to="category/sport" >Deportes</NavLink>
                <NavLink className={(navData) => navData.isActive ? "CurrentCategory" : "Side-Item"} to="category/collection" >Colección</NavLink>
            </li>
        )
    }else{
        <li className='Category-List'> </li>
    }
}

export default CategoriesList