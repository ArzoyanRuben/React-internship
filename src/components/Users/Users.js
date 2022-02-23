import User from "../User/User";

export default function Users({ users, showName }) {
  return (
    <ul className="users">
      {users.map((user) => (
        <User key={user.id} user={user} showName={showName}/>
      ))}
    </ul>
  );
}
