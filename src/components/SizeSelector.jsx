import {React, useEffect, useState} from 'react'

function SizeSelector(props) {
    const [size, setSize] = useState([])
    const [quantity, setquantity] = useState([])

    let arr = []
    useEffect(() => {
        setSize(props.size)
        setquantity(props.stock)
    }, [])
    function fillWebsitePlaceFiller(times) {
        for (var number = 1; number < 8; number++) {
            arr.push(number)
        }
    }

    return (
        <div className='productInfo-purchaseOptions'>
            <select className='purchaseOptions-size' name="select" id="size">
                <option>TALLE</option>
                {size.map( (sizeValue)=>(<option key={sizeValue}>{sizeValue}</option>))}
            </select>
            <select className='purchaseOptions-stock' name="select" id="stock">
                <option>CANTIDAD</option>
                {fillWebsitePlaceFiller(quantity)}
                {arr.map((qnty)=>(<option key={qnty}>{qnty}</option>))}
            </select>
        </div>
    )

}

export default SizeSelector