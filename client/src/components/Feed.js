import { useState } from "react";
import DisplayComment from "./DisplayComment";
import { Link, BrowserRouter } from "react-router-dom";
function Feed({ title, body, posts, user_id, key, currentUser, comments }) {
  const [isShow, setIsShow] = useState(false);
  const [isShowComment, setIsShowComment] = useState(false);
  const [post, setPost] = useState({
    title: title,
    body: body,
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
  console.log(posts);
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
          console.log("Updated", data);
        }
      });
  }
  console.log(title);
  // Delete posts
  const deleteAccount = () => {
    fetch(`/posts/${posts.id}`, {
      method: "DELETE",
    }).then(() => {
      setPost(null);
    });
  };
  console.log(posts);

  return (
    <div className="display-post">
      <form>
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
          ) }
        <h3
          style={{
            top: "0",
            float: "left",
            marginLeft: "7px",
            marginTop: "15px",
            color: "#ffeba7",
          }}
        >
          {posts.user.username}{" "}
        </h3>
        <h2>{posts.title}</h2>
        <h3>{posts.body}</h3>
        {/* {posts.user ? <span>{posts.user.username}</span> : null} */}
        {currentUser.id === posts.user_id ? (
          <>
            <input
              type="button"
              value="X"
              className="Xbtn"
              onClick={deleteAccount}
            />
            <input
              type="button"
              className="btn"
              value="Edit"
              onClick={toggleShow}
            />
          </>
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
            </div>
          </form>
        ) : null}
        <input
          type="button"
          className="btn2"
          value="Comment"
          onClick={toggleShowComment}
        />
        {isShowComment ? (
          //  <h1>{comment}</h1>
          <DisplayComment
            user_id={user_id}
            currentUser={currentUser}
            post={post}
            comments={comments}
            posts={posts}
          />
        ) : null}

        <input type="button" className="btn2" value="Chat" />
        <Link className="btn2" to="/Chat">
        Chat
        </Link>
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
      </form>
    </div>
  );
}

export default Feed;
