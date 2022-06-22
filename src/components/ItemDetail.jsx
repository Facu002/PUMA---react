import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfig';
import ItemInfo from './ItemInfo';
function ItemDetail() {
    let {id} = useParams()
    const [products, setProducts] = useState([])
    useEffect(()=>{
        let fetchOne = async()=>{
            const docRef = doc(db, "products", `${id}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return {
                    id: id,
                    ...docSnap.data()
                }
            }
        }
        fetchOne()
        .then(result=>setProducts(result))
        .catch(err=>console.log(err))
        
    },[])
    return (
        <>
        {
                <ItemInfo
                //key={products.id}
                description={products.description}
                name={products.name}
                img={products.images}
                
                stock={products.stock}
                price={products.price}
                />
                
        }
        </>
    )
}

export default ItemDetail