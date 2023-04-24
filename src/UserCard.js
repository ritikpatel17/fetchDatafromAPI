import React from 'react';

function UserCard(props) {
  const { user } = props;
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.first_name} />
      <div className="user-info">
        <h2>{user.first_name} {user.last_name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default UserCard;
