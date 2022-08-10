import React, { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

const  CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem= (item, num, sizeSelected)=>{
        let multiAdd = cartList.find(product => product.idItem === item.name);
        console.log(cartList);
        if(multiAdd === undefined){
            setCartList([
                ...cartList, 
                {
                    //idItem: item.key,
                    nameItem: item.name,
                    costItem: item.price,
                    numItem: num,
                    totalCost: (item.price * num),
                    imageItem: item.imgs[0],
                    sizeItem: sizeSelected
                }
            ])
            console.log(cartList);
        }else{
            multiAdd.numItem += num
        }
    }

    const totalPurchase = ()=>{
        let total = cartList.map(i => (i.numItem * i.costItem))
        return total.reduce((n, totalCost ) => n + totalCost, 0)
    }

    return(
        <CartContext.Provider value={{cartList, addItem, totalPurchase}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
