import { useState, useEffect } from "react";
import setlocalStorage from "../utils/setLocalStorage";

export default function useFetch(initialVal, request) {
    const [value, setValue] = useState(initialVal);

    useEffect(() => {
        const fetchData = async () => {
          const data = await request();
          setValue(data);
          
        };
        fetchData();

        return setValue(null)
      }, []);

      return [value]

      
}