function Comments({ text, username }) {
console.log(username);
  return (
    <div>
{/* <h1>{username.username}</h1> */}
      <h2>{text}</h2>
    </div>
  );
}

export default Comments;
