import React from 'react';

import Photos from "./Photos";

function Albums({albums}) {

    return (
        <div>
            <h2>TITLES OF ALBUMS</h2>
            {albums.map(
                album =>
                    <Photos key={album.id} userId={album.userId} title={album.title}/>
            )}

        </div>
    );
}

export default Albums;
