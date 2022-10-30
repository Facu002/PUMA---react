import {React, useEffect, useState} from 'react'

function ItemSelectors(props) {
    //const [size, setSize] = useState([])
    const [selectedQuantity, setSelectedQuantity] = useState()

    const [selectedSize, setSelectedSize] = useState();

    const [btnAnimation, setbtnAnimation] = useState(false);

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
            // setbtnAnimation("productInfo-purchaseBtn --activeAnimation")
            const animate = () => {
            
                // Button begins to shake
                setbtnAnimation(true);
                
                // Buttons stops to shake after 2 seconds
                setTimeout(() => setbtnAnimation(false), 2000);
                
            }
            animate()
        }else{
            console.log("can't process product details")
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
                <h4>CANTIDAD</h4>
                <select className='purchaseOptions-stock' name="select" id="stock" 
                onChange={(e) => setSelectedQuantity(e.target.value)} >
                    
                    {productStock()}
                    <option>Cantidad</option>
                    {arr.map((qnty)=>(<option key={qnty}>{qnty}</option>))}
                </select>
            </div>
        </div>

        <button className={btnAnimation ? "--activeAnimation" : "productInfo-purchaseBtn"} onClick={() => AddProductToCart()}>
            {
            btnAnimation 
            ?"Agregado al carrito"
            :"Agregar al carrito"
            }
        </button>
        </>
    )

}

export default ItemSelectors