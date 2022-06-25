import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, query, where } from "firebase/firestore";
import { db } from './firebaseConfig';
import ItemInfo from './ItemInfo';
function ItemDetail() {
    let {id} = useParams()
    const [products, setProducts] = useState([])

    
    useEffect(()=>{
        async function fetchOne(){
            const docRef = doc(db, "products", `${id}`)

            const docSnap = await getDoc(docRef);
                
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setProducts(docSnap.data())

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        fetchOne()
    },[id])

    return (
        <div>
        { products !== [] ? 
                <ItemInfo
                key={products.id}
                description={products.description}
                name={products.name}
                imgs={products.images}
                stock={products.stock}
                price={products.price}
                />
            : null
        }
        </div>
    )
}

export default ItemDetail