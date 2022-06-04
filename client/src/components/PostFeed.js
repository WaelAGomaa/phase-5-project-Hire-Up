import { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import Feed from "./Feed";
import Home from "./Home";

function PostFeed({ currentUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const renderPosts = posts.map((post) => (
    <Feed
      key={post.id}
      id={post.id}
      title={post.title}
      body={post.body}
      posts={post}
      user_id={post.user_id}
      comments={post.comments}
      username={post.comments}
      setPosts={setPosts}
      postsState={posts}
      currentUser={currentUser}
      likes={post.likes}
    />
  ));


  return (
    <>
      {currentUser ? (
        <>
          <div className="feed-grid">
            <div>
              <CreatePost
                currentUser={currentUser}
                setPosts={setPosts}
                postsState={posts}
              />
            </div>
            <main>
              <div className="post-container">
                <ul>{renderPosts}</ul>
              </div>
            </main>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
}
export default PostFeed;
