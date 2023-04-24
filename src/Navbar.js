import React from 'react';

function Navbar({ onFetchAllUsers }) {
  return (
    <nav>
      <div className="brand">Brand Name</div>
      <button className="get-users-btn" onClick={onFetchAllUsers}>Get Users</button>
    </nav>
  );
}

export default Navbar;