import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { axiosInstance } from './axios';
import PostCard from './component/postCard';
import UserCard from './component/userCard';
import BookmarkedPosts from './pages/BookMarkedPosts';
import FollowedUsers from './pages/FollowedUser';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);

  useEffect(() => {
    axiosInstance.get('/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));

    axiosInstance.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleBookmark = (postId) => {
    const newBookmarkedPosts = [...bookmarkedPosts];
    if (!bookmarkedPosts.includes(postId)) {
      newBookmarkedPosts.push(postId);
    } else {
      const index = newBookmarkedPosts.indexOf(postId);
      newBookmarkedPosts.splice(index, 1);
    }
    setBookmarkedPosts(newBookmarkedPosts);
  };

  const handleFollow = (userId) => {
    const newFollowedUsers = [...followedUsers];
    if (!followedUsers.includes(userId)) {
      newFollowedUsers.push(userId);
    } else {
      const index = newFollowedUsers.indexOf(userId);
      newFollowedUsers.splice(index, 1);
    }
    setFollowedUsers(newFollowedUsers);
  };

  return (
    <Router>
      <div className="App">
        <h1>Posts and Users</h1>
        <Routes>
          <Route path="/" element={
            <>
              <h2>Posts</h2>
              <div className="posts">
                {posts.map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    isBookmarked={bookmarkedPosts.includes(post.id)}
                    onBookmark={handleBookmark}
                  />
                ))}
              </div>
              <h2>Users</h2>
              <div className="users">
                {users.map(user => (
                  <UserCard
                    key={user.id}
                    user={user}
                    isFollowed={followedUsers.includes(user.id)}
                    onFollow={handleFollow}
                  />
                ))}
              </div>
            </>
          } />
          <Route path="/bookmarked-posts" element={<BookmarkedPosts posts={posts.filter(post => bookmarkedPosts.includes(post.id))} />} />
          <Route path="/followed-users" element={<FollowedUsers users={users.filter(user => followedUsers.includes(user.id))} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
