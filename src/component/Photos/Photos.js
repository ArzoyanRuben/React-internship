import Photo from "../Photo/Photo";

 function Photos({ items, id }) {
  return (
    <div className="photos">
      {items.map((photo) => {
        if (photo.id === id) {
          return <Photo title={photo.title} url={photo.url} />;
        }
      })}
    </div>
  );
}
export default Photos