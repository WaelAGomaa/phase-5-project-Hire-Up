import { useState } from "react";
import CreateComment from "./CreateComment";
import Comments from "./Comments";
function DisplayComment({ user_id, currentUser, post, comments, posts }) {
  // const [comments, setComments] = useState([]);

  console.log(post.id)
  // Display all comments
  // useEffect(() => {
  //   fetch(`/comments`)
  //     .then((response) => response.json())
  //     .then((data) => setComments(data));
  // }, []);
  console.log(comments);

  const renderComments = comments.map((comment) => (
    <Comments
      key={comment.id}
      id={comment.id}
      text={comment.text}
      user_id={comment.user_id}
      post_id={comment.post_id}
      currentUser={currentUser}
      comments={posts.comments}
      // setComments={setComments}
      user={user_id}
    />
  ));
console.log(posts.comments);
  return (
    <>
      {" "}
      <div>
        <div>
          <CreateComment currentUser={currentUser} post={post} comments={comments}
          posts={posts} />
        </div>
          <div>
            <ul>{renderComments}</ul>
          </div>
        <main>
        </main>
      </div>
    </>
  );
}

export default DisplayComment;

// console.log(comments);  // Display all comments
// useEffect(() => {
//   fetch(`/comments/${posts.id}`)
//     .then((response) => response.json())
//     .then((data) => setComments(data));
// }, []);
// Add a comment
// function handleNewComment(e) {
//   e.preventDefault();
//   fetch("/comment", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ ...comment, user_id: currentUser.id }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.errors) {
//         console.log(data.errors);
//       } else {
//         setComment(data);
//         console.log("Comment was posted: ", data);
//       }
//     });
// }
