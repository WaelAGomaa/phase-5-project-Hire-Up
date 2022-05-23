

function Feed({ title, body, posts }) {

  console.log(posts);

  return (
    <div className="display-post">
      <form>
        <h2>{title}</h2>
        <h2>{body}</h2> 

        <input type="button" className="btn" value="Edit" />
        <input type="button" className="btn2" value="Comment" />
        <input type="button" className="btn2" value="Chat" />
        <input type="button" className="btn2" value="Email" />
      </form>
    </div>
  );
}

export default Feed;
