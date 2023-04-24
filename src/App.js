import React, { useState } from 'react';
import Navbar from './Navbar';
import UserGrid from './UserGrid';
import './style.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllUsers = async () => {
    setIsLoading(true);
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    setUsers(data.data);
    setIsLoading(false);
  };

  return (
    <div>
      <Navbar onFetchAllUsers={fetchAllUsers} />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
}

export default App;
