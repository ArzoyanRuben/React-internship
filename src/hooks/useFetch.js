import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { usersSliceOp } from "../store/users";
import { addVal } from "../store/users/usersSlice";
import handleData from "./../store/users/operations";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    const getData = async () => {
      const data = await fetch(url);
      return await data.json();
    };

    getData().then((items) => {
      setData(items.slice(0, 10));
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
