import React from 'react';

const FollowedUsers = ({ users }) => {
  return (
    <div>
      <h2>Followed Users</h2>
      {users.length > 0 ? (
        users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>No followed users.</p>
      )}
    </div>
  );
};

export default FollowedUsers;
