import React from 'react';
import useFetch from "../hooks/useFetch";
import {albumsUrl} from "../API/Api";
import Photos from "./Photos";

function Albums() {
    const [data] = useFetch(albumsUrl)
    return (
        <div>
            <h2>TITLES OF ALBUMS</h2>
            {data && data.map(
                item =>
                    <Photos key={item.id} userId={item.userId} title={item.title}/>
     )}
        </div>
    );
}

export default Albums;
