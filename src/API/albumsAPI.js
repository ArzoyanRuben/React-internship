export async function getAlbums() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }