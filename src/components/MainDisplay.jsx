import React from 'react'
import { useEffect , useState } from 'react';
import {db} from './firebaseConfig'
import { useParams } from 'react-router-dom'
import {collection, query, getDocs,where} from 'firebase/firestore'
import Item from './Item'
import css from '../styles/style.css'

function MainDisplay() {
    const [products, setProducts] = useState([])    
    const [searchBarValue, setSearchBarValue] = useState("")
    
    let {idCategory} = useParams()  
    let colRef 
    if (idCategory) {
        colRef = query(collection(db, "products"), where('category', '==', idCategory));
    } else {
        colRef = query(collection(db, "products"));
    }
    useEffect(()=>{
            getDocs(colRef)
            .then(snapshot => {
                let list = []
                snapshot.docs.forEach(doc => {
                list.push({ ...doc.data(), key: doc.id })
                })
                setProducts(list)
            })
            .catch(err => {
                console.log(err.message)
            })
            
        },[idCategory])

    return(
        <>
        <input placeholder="Buscar producto..." className='search-products' onChange={event => setSearchBarValue(event.target.value)} />
        
        <div className='main'>
            {
                products.filter(item =>{
                    if (searchBarValue === "") {
                        return item
                    }else if (item.name.toLowerCase().includes(searchBarValue.toLowerCase())) {
                        return item;
                    }
                }).map((item, index) =>
                    <Item
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    thumbnail={item.thumb}
                    img={item.images}
                    stock={item.stock}
                    price={item.price}
                    index={item.key}
                    />
                    )
            }
        </div>
        </>
    )
}

export default MainDisplay  