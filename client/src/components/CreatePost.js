import { useState } from "react";
import PostFeed from "./PostFeed";
function CreatePost() {
  const [isShow, setIsShow] = useState(false);
  function toggleShow() {
    setIsShow(!isShow);
  }
  const [posts, setPosts] = useState({
      title: "",
      body: "",
    });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: posts.title,
        body: posts.body,
      }),
    })
      .then((r) => r.json())
      .then((r) => setPosts);
  }
  console.log(posts);
  return (
    <div className="feed-grid">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <button onClick={toggleShow} className="gig">
            New Gig <i className="arrow-down"></i>
          </button>
          {isShow ? (
            <div className="post-template">
              <input
                type="text"
                className="input-field-post"
                placeholder="Title"
                onChange={(e) => setPosts({ ...posts, title: e.target.value })}
                value={posts.title}
              />
              <input
                type="text"
                className="input-field-post-body"
                placeholder="What do you need done?"
                onChange={(e) => setPosts({ ...posts, body: e.target.value })}
                value={posts.body}
              />
              <input type="submit" className="btn2" value="Post" />
            </div>
          ) : null}
        </div>
      </form>
      <div className="posts">
        <PostFeed posts={posts} />
      </div>
    </div>
  );
}

export default CreatePost;
