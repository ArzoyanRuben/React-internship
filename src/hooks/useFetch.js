import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    const getData = () => {
      return fetch(url).then((data) => data.json());
    };

    getData().then((items) => {
      setData(items.slice(0, 50));
      setLoading(false);
    });
    getData().catch((err) => {
      setLoading(false);
      setError("An error occured. So Awkward..");
    });

    setData(getData);
    return setData(null);
  }, []);

  return { data, setData, setLoading, loading, error };
}
