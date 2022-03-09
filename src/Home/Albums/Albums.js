import React from 'react';
import Photos from '../../component/Photos/Photos';
import useFetch from '../../component/Hook/useFetch/useFetch';
import {ALBUM_URL} from '../../constants/Urls'
import ModalPhotos from '../../component/ModalPhotos/ModalPhotos';


 export default function Albums() {
  const [data] = useFetch(ALBUM_URL)
  
  return (
      <div>
          <h2>hello</h2>
          {data.map(
              item =>
              <div>
                  <Photos key={item.id} userId={item.userId} title={item.title}/>
                  <ModalPhotos/>
                  </div>
                  
          )}

      </div>
  );
}



