import React from 'react';

const BookmarkedPosts = ({ posts }) => {
  return (
    <div>
      <h2>Bookmarked Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No bookmarked posts.</p>
      )}
    </div>
  );
};

export default BookmarkedPosts;
