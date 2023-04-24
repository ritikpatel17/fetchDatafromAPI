import React from 'react';
import UserCard from './UserCard';

function UserGrid(props) {
  const { users } = props;
  return (
    <div className="user-grid">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserGrid;
