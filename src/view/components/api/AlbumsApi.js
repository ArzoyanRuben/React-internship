import React from 'react'

import constants from '../../constants'

const{URL_LIST} = constants

export async function albumsApi () {

 try{
     const res = await  axios
      .get(URL_LIST + "/photos")
      .then((res) => {
        setPhoto(res.data);
      })
    }
    catch(error) {console.log("error")} ;
}


   