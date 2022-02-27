import Photo from "../Photo/Photo";

export default function Photos({ items, id }) {
  return (
    <div className="photos">
      {items.map((photo) => {
          console.log(photo.albumId, id, "ggg")
        if (photo.id === id) {
          return <Photo title={photo.title} url={photo.url} />;
        }
      })}
    </div>
  );
}