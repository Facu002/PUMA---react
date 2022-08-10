import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/Context';
function Cart() {
    const context = useContext(CartContext)

    // let createOrder = ()=>{

    //     const itemsForDB = context.cartList.map(item => ({
    //       title: item.nameItem,
    //       price: item.totalCost,
    //       id: item.nameItem
    //     }));
    
    //       let orderList = {
    //         buyer : {
    //           name: 'prueba',
    //           phone: '333333',
    //           email: 'prueba@prueba'
    //         },
    //         items: itemsForDB,
    //         date: serverTimestamp(),
    //         total: context.totalPurchase()
    //       }
    
    
    //       const createOrderInFirestore = async () => {
    //         await   addDoc(collection(db, 'orders'), orderList)
    //       }
    //       createOrderInFirestore()
    //       .then(res => console.log('compra realizada')) 
    //       context.clear()
    //     }

    return (
    <div className='cart-container'>
    {
    context.cartList.length > 0 && (
        context.cartList.map(product =>
            <div className='productInCart-container'>
            <img className='productInCart-image' src={product.imageItem} alt="" />

            <h1>{product.nameItem}</h1>

            <span>${product.costItem}</span>
            <h2>x{product.numItem}</h2>
            
            <span>{product.sizeItem}</span>
            {/* <h3>{product.costItem * product.numItem}</h3> */}

            </div>) 
        
    )
    }
        {
        context.cartList.length > 0 &&
        <>
        <h1>Precio a Pagar: ${context.totalPurchase()}</h1>
        <button >Terminar Compra</button>
        </>
        }
    </div>
    )
}

export default Cart