import axios from "axios";

export function getAlbums() {
    return axios.get('https://jsonplaceholder.typicode.com/albums')
}
