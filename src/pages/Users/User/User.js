import "./User.css"

export default function User({ user, showName }) {
  const handleShowName = () => {
    showName(user.name);
  };

  return (
    <li className="user">
      <p>{user.name}</p>
      <button onClick={handleShowName}>Click</button>
    </li>
  );
}
