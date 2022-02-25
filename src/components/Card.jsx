import React, { useEffect, useState } from "react";
import { getData } from "./API";
import { CardBody } from './CardBody';

export const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    getData().then((items) => {
      mounted && setData(items);
    });
    return () => (mounted = false);
  }, []);

  return(
    <div className="main-container">
        {data.map((item) => <CardBody key={item.id} item={item} />)}
    </div>
    )
};
