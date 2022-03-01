import useFetch from "../../hooks/useFetch";
import Photo from "../Photo/Photo";
import Loader from "../shared/Loader/Loader";

const { v4: uuidv4 } = require('uuid');

export default function Photos({ itemsGetter, id }) {
  const [items] = useFetch(null, itemsGetter);

  return (
    <>
      {items ? (
        <div className="photos">
          {items.map((photo) => {
            if (photo.id === id) {
              return <Photo title={photo.title} key={uuidv4()} url={photo.url} />;
            }
          })}
        </div>
      ) : (
        Loader
      )}
    </>
  );
}
