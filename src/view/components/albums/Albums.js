import React from 'react';

import { PhotoList } from './PhotoList';
import useFetch from '../../hooks/useFetch';
import {PHOTO_URL} from '../../constants'


const Albums = () => {
  const [data] = useFetch(PHOTO_URL);

  return (
    <div>
      {data && data.map(item => {
        return(
          <div>
             <PhotoList   
              key= { Date.now() / 1000}
              title = {item.title}
              url={item.url}
           />
          </div>
        )
      })}
    </div>
  )
}


export default Albums
