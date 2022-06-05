import React from 'react'
import { NavLink } from 'react-router-dom';

function DropCategories(props) {
    if (props.show == true) {
        return (
        <aside id="menuDisplay" className="aside" visibility='visible' >
            <ul className="aside-ul">
                <li className="aside-ul__li">
                    <NavLink to='category/footwear' className="aside-ul__li_btn">CALZADO</NavLink>
                </li>
                <li className="aside-ul__li">
                    <NavLink to='category/clothes' className="aside-ul__li_btn">ROPA</NavLink>
                </li>
                <li className="aside-ul__li">
                    <NavLink to='category/sport' className="aside-ul__li_btn">DEPORTES</NavLink>
                </li>
                <li className="aside-ul__li">
                    <NavLink to='category/collection' className="aside-ul__li_btn">COLECCION</NavLink>
                </li>
                
                
            </ul>
        </aside>
        )
    }else{
        return(
            <aside visibility='hidden'>

            </aside>
        )
    }
}

export default DropCategories