import { useState, useEffect } from "react"; 
import { List} from "../APIResponseTypes";

type Error = true | false

export default function useFetch(itmesUrl: string): [List[], Error, Function] {
  const [data, setData] = useState([] as List[]);
  const [error, setError] = useState(false as Error)

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(itmesUrl);
          const data = (await response.json()) as List[]
          setData(data);
        } catch (err) {
          setError(true);
        }      
    };
    void fetchData();
  }, []);

  return [data, error, setData]; 
}
