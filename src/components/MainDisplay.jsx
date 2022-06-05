import React from 'react'
import { useEffect , useState } from 'react';
import {db} from './firebaseConfig'
import { useParams } from 'react-router-dom'
import {collection, query, getDocs,where , getFirestore, doc, QuerySnapshot} from 'firebase/firestore'
import Item from './Item'
import css from '../styles/style.css'
function MainDisplay() {
    const [products, setProducts] = useState([])    

    let {idCategory} = useParams()  

    let colRef 
    if (idCategory) {
        colRef = query(collection(db, "products"), where('category', '==', idCategory));
    } else {
        colRef = query(collection(db, "products"));
    }
    useEffect(()=>{

        // get collection data
            getDocs(colRef)
            .then(snapshot => {
                // console.log(snapshot.docs)
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
        //console.log(products)


    return(
        <div className='main'>
            {
            products.map(item => 
                <Item
                key={item.id}
                name={item.name}
                description={item.description}
                thumbnail={item.thumb}
                img={item.images}
                />
            )
            }
        </div>
    )
}

export default MainDisplay  