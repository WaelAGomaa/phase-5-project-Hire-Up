function Feed() {
  return (
    <div className="feed-grid">
      <div className="post-template">
        <form>
          <h2 className="gig">New Gig?</h2>
          <div className="Post">
            <input type="text"   className="input-field" placeholder="Title" />
            <input type="text"   className="input-field" placeholder="What do you need done?" />
          </div>
          <input type="submit" className="btn2" value="Post" />
        </form>
      </div>

      <div className="display-post">
        <form>
          <h2>Title</h2>
          <h2>Description</h2>
          <input type="button" className="btn" value="Edit" />
          <input type="button" className="btn2" value="Comment" />
          <input type="button" className="btn2" value="Chat" />
          <input type="button" className="btn2" value="Email" />
        </form>
      </div>
    </div>
  );
}

export default Feed;
