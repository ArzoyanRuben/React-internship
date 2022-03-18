import { useState, useEffect } from "react";
import { List } from "../APIResponseTypes";

type Status = "unloaded" | "loading" | "loaded" | "error" | "success";

export default function useFetch(
  itmesUrl: string,
  methodType: string
): [List[], Status, Function, Function] {
  const [data, setData] = useState([] as List[]);
  const [status, setStatus] = useState("unloaded" as Status);

  console.log(status);

  const fetchData = async (
    url: string,
    method: string,
    items: List[] = []
  ): Promise<string | void> => {
    setStatus("loading");
    try {
      const response = await fetch(url, {
        method,
        ...(method !== "GET" && { body: JSON.stringify(items) }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (method === "GET") {
        const json = await response.json();
        setData(json);
        setStatus("loaded");
      } else {
        setStatus("success");
        await setTimeout(() => {
          setStatus("loaded");
        }, 1000);
        return "success";
      }
      

    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchData(itmesUrl, methodType);
  }, []);

  return [data, status, fetchData, setData];
}