import React from 'react';

const UserCard = ({ user, isFollowed, onFollow }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onFollow(user.id)}>{isFollowed ? 'Unfollow' : 'Follow'}</button>
    </div>
  );
};

export default UserCard;
