import "./Album.css"

export default function Album({ item, showItems }) {
    const handleShowPhotos = () => {
      showItems(item);
    };
     
    return (
      <li className="album" onClick={handleShowPhotos}>
        <p>{item.title}</p>
      </li>
    );
  }
  
