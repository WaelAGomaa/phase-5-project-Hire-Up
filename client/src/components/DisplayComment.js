import { useState, useEffect} from "react";
import CreateComment from "./CreateComment";
import Comments from "./Comments";
function DisplayComment({ user_id, currentUser, post, comments, posts, username,  }) {



  const renderComments = comments.map((comment) => (
    <Comments
      key={comment.id}
      id={comment.id}
      text={comment.text}
      user_id={comment.user_id}
      post_id={comment.post_id}
      currentUser={currentUser}
      comments={posts.comments}
      username={username}
      // setComments={setComments}
      userid={user_id}
    />
  ));
  // console.log(posts.comments);
  return (
    <>
      {" "}
      <div>
        <div>
          <ul>{renderComments}</ul>
        </div>

        <div>
          <CreateComment
            currentUser={currentUser}
            post={post}
            comments={comments}
            posts={posts}
          />
        </div>
      </div>
    </>
  );
}

export default DisplayComment;
