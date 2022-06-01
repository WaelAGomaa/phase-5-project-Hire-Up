import { useState } from "react";


// import Comments from "./Comments";
function CreateComment({ currentUser, post, comments , posts }) {
  // const [comment, setComment] = useState("");

  const [comment, setComment] = useState({
    text: "",
    user_id: "",
    post_id: "",
  });
  // console.log(currentUser);

  // console.log(post);
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...comment,
        user_id: currentUser.id,
        post_id: post.id,
      }),
    })
  };
  //   e.preventDefault();
  //   fetch('/posts/:postId/comments', {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       ...comment,
  //       user_id: currentUser.id,
  //       post_id: post.id,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.errors) {
  //         console.log(data.errors);
  //       } else {
  //         setComment(data);
  //         console.log("New Comment was posted: ", data);
  //       }
  //     });
  // }
console.log(`/posts/:postId/comments`)
  return (
    <form onSubmit={handleSubmit}>
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

// Add a comment
//   function handleNewComment(e) {
//     e.preventDefault();
//     fetch(`/posts/${comments.id}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...comment,
//         user_id: currentUser.id,
//         post_id: posts.id,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.errors) {
//           console.log(data.errors);
//         } else {
//           setComment(data);
//           console.log("Comment was posted: ", data);
//         }
//       });
//   }
