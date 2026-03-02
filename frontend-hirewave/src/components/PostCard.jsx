function PostCard({ post }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5>{post.profile}</h5>
        <p>{post.desc}</p>
        <p><strong>Experience:</strong> {post.exp} years</p>
        <p><strong>Tech:</strong> {post.techs.join(", ")}</p>
      </div>
    </div>
  );
}

export default PostCard;
