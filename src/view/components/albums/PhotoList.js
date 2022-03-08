import React, {useState} from 'react'

import {Photos} from './Photos'
import './PhotoList.scss'


export const PhotoList = ({ title, url }) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <div className="photo">
          <div className="photo-list">
            <p onClick={() => setShowModal(true)}>{title}</p>
          </div>
        <Photos
            url={url}
            showModal={showModal}
            onClose={() => setShowModal(false)}
          />
        </div> 
      </div>
    );
  };
  