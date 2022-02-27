import "./User.css"

export default function User({ item, showItems }) {
  const handleShowPosts = () => {
    showItems(item.id);
  };

  return (
    <li className="user" onClick={handleShowPosts}>
      <p>{item.name}</p>
    </li>
  );
}
