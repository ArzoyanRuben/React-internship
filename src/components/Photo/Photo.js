export default function Photo({ photo, showItems, changeType }) {

  const handleShowPosts = () => {
    showItems(photo);
    changeType()
  };
    return (
      <div onClick={handleShowPosts}>
        <h3>{photo.title}</h3>
        <img src={`${photo.url}`}/>
      </div>
    );
  }