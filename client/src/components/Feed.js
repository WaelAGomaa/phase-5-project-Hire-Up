import { useState, useEffect } from "react";
import DisplayComment from "./DisplayComment";
import ChatPage from "./ChatPage";
import { Link, BrowserRouter, Route } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Feed({
  title,
  body,
  posts,
  user_id,
  key,
  currentUser,
  comments,
  setPosts,
  postsState,
  username,
  likes,
}) {
  const newLikes = likes;
  const [liked, setLiked] = useState(newLikes);

  const [isShow, setIsShow] = useState(false);
  const [isShowComment, setIsShowComment] = useState(false);
  const [post, setPost] = useState({
    title: title,
    body: body,
    likes: likes,
    // user_id: "",
  });

  // Toggle the edit button
  function toggleShow() {
    setIsShow(!isShow);
  }
  // Toggle the comment button
  function toggleShowComment() {
    setIsShowComment(!isShowComment);
  }
  // console.log(posts);
  // Updates a post
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/posts/${posts.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
        } else {
          setPost(data);
          setPosts(
            postsState.map((post) => (post.id === data.id ? data : post))
          );
          console.log("Updated", data);
        }
      });
  }
  // console.log(title);
  // Delete posts
  const deleteAccount = () => {
    fetch(`/posts/${posts.id}`, {
      method: "DELETE",
    }).then(() => {
      setPost(null);
      setPosts(postsState.filter((post) => post.id !== posts.id));
    });
  };
  // console.log(posts);

  return (
    <div className="display-post">
      {isShow || isShowComment ? null : (
        <img
          src={posts.user.picture}
          style={{
            width: "10%",
            height: "30%",
            float: "left",
            borderRadius: "50%",
            top: "0",
          }}
        />
      )}
      <h3
        style={{
          top: "0",
          float: "left",
          marginLeft: "7px",
          marginTop: "14px",
          color: "#ffeba7",
        }}
      >
        {posts.user.username}
      </h3>
      {currentUser.id === posts.user_id ? (
        <button className="Xbtn" onClick={deleteAccount}>
          X
        </button>
      ) : null}
      <h2>{posts.title}</h2>
      <h3>{posts.body}</h3>
      {currentUser.id === posts.user_id ? (
        <button className="btn" onClick={toggleShow}>
          Edit
        </button>
      ) : null}
      {isShow ? (
        <form onClick={handleSubmit}>
          <div className="post-template">
            <input
              type="text"
              className="input-field-post"
              placeholder="Title"
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <input
              type="text"
              className="input-field-post-body"
              placeholder="Body"
              onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <input type="submit" className="btn2" value="Save" />
            <input
              type="button"
              className="input-field-post-body"
              placeholder="heart"
              onChange={(e) => setPost({ ...post, likes: e.target.value })}
            />
          </div>
        </form>
      ) : null}

      {isShowComment ? (
        <DisplayComment
          user_id={user_id}
          currentUser={currentUser}
          post={post}
          comments={comments}
          posts={posts}
          username={username}
        />
      ) : null}
      <button type="button" className="btn2" onClick={toggleShowComment}>
        Comment
      </button>

      <Link to="/Chatpage">
        <button className="btn2">Chat</button>
      </Link>

      <button className="btn2" onClick={() => setLiked(liked + 1)}>
        <FaHeart /> {liked}
      </button>

      {currentUser.id === posts.user_id ? null : (
        <BrowserRouter>
          <Link
            style={{ textDecoration: "none" }}
            className="btn2"
            to={{
              pathname: `https://mail.google.com/mail/?view=cm&fs=1&to=${posts.user.email}&su=${posts.title}&body=${posts.body}`,
            }}
            target="_blank"
          >
            Email
          </Link>
        </BrowserRouter>
      )}
    </div>
  );
}

export default Feed;
