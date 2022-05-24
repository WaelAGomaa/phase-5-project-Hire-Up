

function Feed({ title, body, posts, user_id, key   }) {



  return (
    <div className="display-post">
      <form>
        <h2>{posts.title}</h2>
        <h2>{posts.body}</h2> 
        {/* {posts.user ? <span>{posts.user.username}</span> : null} */}
        <input type="button" className="btn" value="Edit" />
        <input type="button" className="btn2" value="Comment" />
        <input type="button" className="btn2" value="Chat" />
        <input type="button" className="btn2" value="Email" />
      </form>
    </div>
  );
}

export default Feed;
