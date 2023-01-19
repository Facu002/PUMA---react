import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/Context';
function Cart() {
    const context = useContext(CartContext)

    return (
    <div className='cart-container'>
        <div className='productInCart-container'>
    {
    context.cartList.length > 0 ? (
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
        : <div className="productInCart-empty">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-x" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" />
            <path d="M17 3l4 4" />
            <path d="M21 3l-4 4" />
            </svg>
            <h1>Carrito vacio</h1>

            </div>
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