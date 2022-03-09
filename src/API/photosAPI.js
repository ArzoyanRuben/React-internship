export async function getPhotos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}