export default function setlocalStorage(name, value) {
   localStorage.setItem(name, JSON.stringify(value))
}