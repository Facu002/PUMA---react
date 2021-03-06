import React from 'react'
import { NavLink } from 'react-router-dom';
function DropMenu(props) {
    
    if (props.show == true) {
        return (
        <aside id="menuDisplay" className="aside" visibility='visible' >
            <ul className="aside-ul">
                <li className="aside-ul__li">
                    <NavLink to='/' className="aside-ul__li_btn" >INICIO</NavLink>
                </li>
                <li className="aside-ul__li">
                    <input className="aside-ul__li_btn" type="text" placeholder="Buscar.." />
                </li>
                <li className="aside-ul__li">
                    <NavLink to='/' className="aside-ul__li_btn">CARRITO</NavLink>
                </li>
                <li className="aside-ul__li">
                    <NavLink to='/' className="aside-ul__li_btn">PREGUNTAS</NavLink>
                </li>
                
            </ul>
        </aside>
        )
    }else{
        return(
            <aside visibility='hidden' display='none'>

            </aside>
        )
    }
}

export default DropMenu