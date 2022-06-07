import {React, useState} from 'react'
import DropMenu from "./DropMenu";
import DropCategories from './DropCategories';
import logoPuma from '../img/puma.svg'
import { useParams } from 'react-router-dom';

function NavBar() {
    const [Menu, setMenu] = useState(false)
    const [Categories, setCategories] = useState(false)
    let {idCategory} = useParams()  

    function openMenuCloseCategory() {
        setCategories(false)
        setMenu(!Menu)
    }
    function openCategoryCloseMenu() {
        setMenu(false)
        setCategories(!Categories)
    }

    
    return (
        <>
        <div className='NavBar'>
                <img className='puma-logo' src={logoPuma} alt="puma-logo"/>
            <hr></hr>
                <div className="nav-display">
                    <button id="menu" onClick={()=>openMenuCloseCategory()} className="nav-display_btn">MENU</button> 
                    <button id="categories" onClick={()=>openCategoryCloseMenu()} className="nav-display_btn">CATEGORIAS</button> 
                </div>
            {/* <hr></hr> */}
        </div>

        <DropMenu show={Menu}/>
        <DropCategories show={Categories}/>
        
        </>
    )
}

export default NavBar