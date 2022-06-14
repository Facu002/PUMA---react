import React from 'react'
import MainDisplay from '../components/MainDisplay'
import { useParams } from 'react-router-dom'

function Categories() {
    let {idCategory} = useParams()  
    
    return (
        <>  
            <h1>Resultados de {idCategory}</h1>
            <MainDisplay/>
        </>
    )
}

export default Categories