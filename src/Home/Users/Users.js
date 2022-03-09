import React from "react";

import "./Users.css";
import User  from "../../component/User/User";
import useFetch from "../../component/Hook/useFetch/useFetch";
import { USER_URL}   from "../../constants/Urls";

export default function Users()  {
  const [data] = useFetch(USER_URL)
 
  return (
    
        <div>
          {data.map((item) => {
              return (
                <div>
                  <User
                   id1={item.id} 
                    key={item.id}
                    name={item.name}
                    username={item.username}
                    website={item.website}
                  />
                </div>
              );
            })}
        </div>
     
  );
};


