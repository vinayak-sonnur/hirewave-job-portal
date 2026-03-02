import { useState } from "react";
import { addPost } from "../services/postService";

function AddPost() {
  const [post, setPost] = useState({
    profile: "",
    desc: "",
    exp: "",
    techs: ""
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      profile: post.profile,
      desc: post.desc,
      exp: Number(post.exp),
      techs: post.techs.split(",")
    };

    addPost(payload);
    alert("Job posted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2>Post a Job</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="profile" placeholder="Job Profile" onChange={handleChange} />
        <textarea className="form-control mb-2" name="desc" placeholder="Job Description" onChange={handleChange} />
        <input className="form-control mb-2" type="number" name="exp" placeholder="Experience" onChange={handleChange} />
        <input className="form-control mb-2" name="techs" placeholder="Tech (comma separated)" onChange={handleChange} />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default AddPost;
