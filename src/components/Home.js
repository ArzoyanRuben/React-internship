import React from 'react';
import Users from "./Users";

function Home({users}) {
    return (
        <div>
            <ul>
                {users.map(user => (
                    <Users key={user.id}  id1={user.id} name={user.name} />
                ))}
            </ul>
        </div>
    );
}

export default Home;