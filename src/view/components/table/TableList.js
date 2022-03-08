import React from 'react'

 const call = () =>{

    axios
      .get('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log("error"));


  return (
    <div className="list">
      <div className="list-text">
        <div >
          {users.map((user) => {
            return (
              <UsersList
                key={user.id}
                name={user.name}
                username={user.username}
                website={user.website}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
  },

