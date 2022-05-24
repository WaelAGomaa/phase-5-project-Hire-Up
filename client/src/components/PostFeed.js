import Feed from "./Feed";
import { useState , useEffect } from "react";
import CreatePost from "./CreatePost";
function PostFeed({ currentUser }) {
  
    const [posts, setPosts] = useState([]);
      
    useEffect(() => {
        fetch("/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, []);

  const renderPosts = posts.map(post => (
      <Feed
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        posts={post}
        user_id={post.user_id}
      />
  ));
  console.log(posts);
  return (
    <main>
      <ul>
          {renderPosts}
      </ul>
      <CreatePost currentUser={currentUser} />
    </main>
  );
}
export default PostFeed;
