export function getItems(endPoint) {
  return async () => {
    try {
      const response = await fetch(endPoint);
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };
}
