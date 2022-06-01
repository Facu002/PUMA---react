import React from 'react'
import { useEffect , useState } from 'react';
import {db} from './firebaseConfig'
import {collection, query, getDocs,docRef, getFirestore, doc, QuerySnapshot} from 'firebase/firestore'
import Item from './Item'
import css from '../styles/style.css'
function MainDisplay() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])    

    const colRef = collection(db, 'products')
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
            
        },[])
        //console.log(products)

    // useEffect(() => {
    // const firestoreFetch = async () => {
        
    //     const q =  query(collection(db, "products"));
    //     const querySnapshot = await getDocs(q);
    //     const dataFromFirestore = querySnapshot.docs.map(document => (document.data()));
    //     return dataFromFirestore;

    // }
    // firestoreFetch()
    // .then(result => setProducts(result))
    // .catch(e => console.log(e))
    // console.log(products)
    // }, [])

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