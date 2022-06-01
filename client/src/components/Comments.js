

function Comments({ text }) {


    return (
    <div>
        {/* <div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <div>
                            <p>{comment.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <CreateComment currentUser={currentUser} post_id={post_id} user_id={user_id} id={id} text={text}/>
        </div> */}
      <h2>{text}</h2>
    </div>
  );
}

export default Comments;
//comments, currentUser, post_id, user_id, id, 