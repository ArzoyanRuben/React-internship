import React from 'react';

function Photo({url}) {
    return (
        <div>
            <div className='modal-photo'>
                <div className="photo-modal-title"> <img src={url} alt="Photo"  /> </div>
            </div>
        </div>
    );
}

export default Photo;