export function getItems(endPoint) {
  return async (type, headers, body) => {
    try {
      const response = await fetch(endPoint);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err)
      return err;
    }
  };
}
