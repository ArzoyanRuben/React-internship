import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useFetch(initalVal, request, action) {
  const [data, setData] = useState(initalVal);
  let dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await request();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setData(data);
    dispatch(action(data));
  }, [data]);
  return [data, setData];
}
