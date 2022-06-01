import React from 'react'

function DropMenu(props) {
    if (props.show == true) {
        return (
        <aside id="menuDisplay" className="aside" visibility='visible' >
            <ul className="aside-ul">
                <li className="aside-ul__li">
                    <a className="aside-ul__li_btn">Inicio</a>
                </li>
                <li className="aside-ul__li">
                    <input className="aside-ul__li_btn" type="text" placeholder="Buscar.." />
                </li>
                <li className="aside-ul__li">
                    <a className="aside-ul__li_btn">Carrito</a>
                </li>
                <li className="aside-ul__li">
                    <a className="aside-ul__li_btn">Preguntas</a>
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

export default DropMenu