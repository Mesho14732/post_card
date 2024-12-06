import React from 'react';

const PostCard = ({ post, isBookmarked, onBookmark }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => onBookmark(post.id)}>{isBookmarked ? 'Unbookmark' : 'Bookmark'}</button>
    </div>
  );
};

export default PostCard;
