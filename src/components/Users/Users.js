import User from "../User/User";

export default function Users({ users, showName }) {
  return (
    <ul className="users">
      {users.map((user) => (
        <User user={user} showName={showName}/>
      ))}
    </ul>
  );
}
