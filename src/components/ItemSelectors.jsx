import {React, useEffect, useState} from 'react'

function ItemSelectors(props) {
    //const [size, setSize] = useState([])
    const [selectedQuantity, setSelectedQuantity] = useState()

    const [selectedSize, setSelectedSize] = useState();

    let arr = []
    let sizeOptions = (props.size)

    
    function productStock(){
        for (var number = 1; number < 6; number++) {
            arr.push(number)
        }
    }

    function AddProductToCart() {
        if (selectedQuantity !== undefined && selectedSize !== undefined) {
            props.onPurchase(parseInt(selectedQuantity, 10), selectedSize)
        }else{
            console.log('nonono')
        }
    }

    return (
        <>
        <div className='productInfo-purchaseOptions'>
            <div>
                <h4>TALLE</h4>
                <select className='purchaseOptions-size' name="select" id="size" onChange={(e) => setSelectedSize(e.target.value)}>
                    <option>Talles</option>
                    {sizeOptions.map( (sizeValue)=>(<option key={sizeValue}>{sizeValue}</option>))}
                </select>
            </div>
            <div>
                <h4>TALLE</h4>
                <select className='purchaseOptions-stock' name="select" id="stock" 
                onChange={(e) => setSelectedQuantity(e.target.value)} >
                    
                    {productStock()}
                    <option>Cantidad</option>
                    {arr.map((qnty)=>(<option key={qnty}>{qnty}</option>))}
                </select>
            </div>
        </div>

        <button className='productInfo-purchaseBtn' onClick={() => AddProductToCart()}>Agregar al carrito</button>
        
        </>
    )

}

export default ItemSelectors