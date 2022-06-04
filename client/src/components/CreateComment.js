import { useState } from "react";


function CreateComment({ currentUser, post, comments, posts}) {


  const [comment, setComment] = useState({
    text: "",
    user_id: currentUser.id,
    post_id: posts.id,
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`posts/${posts.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...comment,
user_id: currentUser.id,
post_id: posts.id,

      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
        } else {
          setComment(data);
          console.log("New comment was posted: ", data);
        }
      });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="post-template">
        <input
          type="text"
          className="input-field-post"
          placeholder="Comment here"
          onChange={(e) => setComment({ ...comment, text: e.target.value })}
          value={comment.text}
        />
        <input type="submit" className="btn2" value="Add Comment" />
      </div>
    </form>
  );
}

export default CreateComment;


