import React, {useState} from 'react'
import ModalContainer from './Modal'
function ImageGallery(imgs) {
    const [Image, setImage] = useState(imgs.imgs)
    const [Modal, setModal] = useState()
    const [isOpen, setIsOpen] = useState()
    
    const ModalImage = (source) => {
        setModal(source)
        setIsOpen(true)
    }
    return (
        <>
        {
            <>
            <ModalContainer source={Modal} open={isOpen} onClose={()=>setIsOpen(false)}/>
            <div className="imageContainer">
                <img className='imageShow imageShow-Thumb' onClick={()=>{ModalImage(Image[0])}}  src={Image[0]} alt='imageThumb'></img>
                <div className="image-Collection">
                    <img className='imageShow imageShow-Secondary' onClick={()=>{ModalImage(Image[1])}} src={Image[1]} alt="imageThumb" />
                    <img className='imageShow imageShow-Secondary' onClick={()=>{ModalImage(Image[2])}} src={Image[2]} alt="imageThumb" />
                    <img className='imageShow imageShow-Secondary' onClick={()=>{ModalImage(Image[3])}} src={Image[3]} alt="imageThumb" />
                </div>
            </div>
                
            </>
        }
        </>
    )
}

export default ImageGallery