import {React, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import CategoriesList from './CategoriesList'
import css from '../styles/style.css'
function Sidebar() {
    const [Categories, setCategories] = useState(false)

    const  openCategory = () => {
        setCategories(!Categories)
    }
    return (
        <div className='Sidebar'>
            <ul>
                <NavLink className='Side-Item' to="/">INICIO</NavLink>

                {/* <NavLink className='Side-Item' to="/" >BUSCAR</NavLink> */}
                <input className='Side-Item Side-Search' type="text" placeholder="Buscar.." />

                <a className='Side-Item' onClick={()=>openCategory()} to="/">CATEGORIAS</a>
                
                <CategoriesList show={Categories}/>

                <NavLink className='Side-Item' to="/" >PREGUNTAS</NavLink>

                <NavLink className='Side-Item' to="/cart" >CARRITO</NavLink>

            </ul>
        </div>
    )
}

export default Sidebar  