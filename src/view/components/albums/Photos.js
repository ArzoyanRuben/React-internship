import React from 'react'

import './Photos.scss'

export const Photos = ({url, showModal, onClose}) => {
    if(!showModal) return null
  return (
    <div className='photos' >
        <div>
           <img src={url} />
        </div>
        <button onClick={onClose} className="modal_button">X</button>
    </div>
  )
}


