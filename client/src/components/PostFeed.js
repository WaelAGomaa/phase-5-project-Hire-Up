import Feed from "./Feed";
function PostFeed({ posts }) {
  const { title, body } = posts;

  console.log(posts);
  return (
    <main>
      <ul>
        <Feed title={title} body={body} posts={posts} />
      </ul>
    </main>
  );
}
export default PostFeed;
