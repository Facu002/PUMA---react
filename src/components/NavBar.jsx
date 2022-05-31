import {React, useState} from 'react'
import DropMenu from "./DropMenu";

import logoPuma from '../img/puma.svg'
function NavBar() {
    const [Menu, setMenu] = useState(false)

    return (
        <>
        <div className='NavBar'>
                <img className='puma-logo' src={logoPuma} alt="puma-logo"/>
            <hr></hr>
                <div className="nav-display">
                    <button id="menu" onClick={()=>setMenu(!Menu)} className="nav-display_btn">MENU</button> 
                    <button id="categories" onClick={()=>setMenu(!Menu)} className="nav-display_btn">CATEGORIAS</button> 
                </div>
            <hr></hr>
        </div>

        <DropMenu show={Menu}/>
                
        </>
    )
}

export default NavBar