import React from 'react';

function Photo({url}) {
    return (
        <div>
            <div >
                <div> <img src={url} alt="Photo"  /> </div>
            </div>
        </div>
    );
}

export default Photo;
