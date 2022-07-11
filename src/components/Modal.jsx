import React, {useState, useEffect} from 'react'

function Modal({open, source, onClose}) {
    const [Modal, setModal] = useState(false)

    if (!open) {
        return null
    }
    return (
        <>
        {
        source ? 
        <div className='ModalContainer'>
            <img className='Modal-img' src={`${source}`} alt="modal" />
            <button className='Modal-closeBtn' onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
        </div>
        : console.log('nop')
        }
        </>
    )


    
    
}

export default Modal    