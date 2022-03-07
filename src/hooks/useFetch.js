import { useState, useEffect } from "react";

export default function useFetch(initialVal, url) {
  const [data, setData] = useState(initialVal);

  useEffect(() => {
    const getUserData = () => {
      return fetch(url).then((data) => data.json());
    };

    getUserData().then((items) => {
      setData(items);
    });
    setData(getUserData);

    return setData(null);
  }, []);
  return [data];
}
