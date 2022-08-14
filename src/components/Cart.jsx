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
        <div className='productInCart-container'>
    {
    context.cartList.length > 0 && (
        context.cartList.map(product =>
        
            <div className="productInCart-itemContainer">
                <img className='productInCart-image' src={product.imageItem} alt="" />

                <div className="productInCart-textInfo">
                    <h1>{product.nameItem}</h1>
                    <div className='productInCart-textInfo__price'>
                        <h2>${product.costItem}</h2>
                        <span>x {product.numItem}</span>
                    </div>
                    <div className="productInCart-textInfo__size">
                        <h2>Talle: </h2>
                        <span> {product.sizeItem}</span>
                    </div>
                </div>
                <button className='productInCart-remove' onClick={() => context.removeProduct(product)}>X</button>

            </div>) 
        )
    }
        </div>
        {
        context.cartList.length > 0 &&
        <div className='cartPurchase-container'>
            <h1 className='cart-finalPrice'>Precio a Pagar: ${context.totalPurchase()}</h1>
            <button className='cart-finalPurchase'>Terminar Compra</button>
        </div>
        }
    </div>
    )
}

export default Cart