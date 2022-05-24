import { useEffect, useState } from "react";
import PostFeed from "./PostFeed";
import Home from "./Home";

function CreatePost({ currentUser }) {
    const [post, setPost] = useState({
        title: "",
        body: "",
        user_id: "",
    });
    console.log(currentUser);
    
 
    console.log(post);
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...post, user_id: currentUser.id }),
        })
      .then((res) => res.json())
      .then((data) => {
          if (data.errors) {
              console.log(data.errors);
            } else {
                setPost(data);
                console.log("New Gig was posted: ", data);
            }
        });
    }
    
    console.log(post);
    return (
        <>
      {currentUser ? (
          <>
          <div className="feed-grid">
            <form onSubmit={handleSubmit}>
              <div className="postForm">
                <button className="gig">
                  New Gig <i className="arrow-down"></i>
                </button>
                <div className="post-template">
                  <input
                    type="text"
                    className="input-field-post"
                    placeholder="Title"
                    onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                    }
                    value={post.title}
                    />
                  <input
                    type="text"
                    className="input-field-post-body"
                    placeholder="What do you need done?"
                    value={post.body}
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                    />
                  <input type="submit" className="btn2" value="Post" />
                </div>
              </div>
            </form>
            <div className="posts">

            </div>
          </div>
        </>
      ) : (
          <Home />
          )}
    </>
  );
}

export default CreatePost;

//   const [isShow, setIsShow] = useState(true);
//   function toggleShow() {
//     setIsShow(!isShow);
//   }