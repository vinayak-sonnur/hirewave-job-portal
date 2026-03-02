import { useEffect, useState } from "react";
import { getAllPosts, searchPosts } from "../services/postService";
import PostCard from "../components/PostCard";

const POSTS_PER_PAGE = 10;

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Load all jobs initially
  useEffect(() => {
    loadAllPosts();
  }, []);

  const loadAllPosts = () => {
    getAllPosts().then(res => {
      setPosts(res.data);
      setCurrentPage(1); // reset page
    });
  };

  const handleSearch = () => {
    if (keyword.trim() === "") {
      loadAllPosts();
    } else {
      searchPosts(keyword).then(res => {
        setPosts(res.data);
        setCurrentPage(1); // reset page
      });
    }
  };

  // Pagination logic
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <div className="container mt-4">

      <h2 className="mb-3">Job Listings</h2>

      {/* 🔍 Search Bar */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by skill, role, keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* 🧾 Job Cards Grid */}
      {currentPosts.length > 0 ? (
        <>
          <div className="row">
            {currentPosts.map((post, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <PostCard post={post} />
              </div>
            ))}
          </div>

          {/* 🔁 Pagination */}
          <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
            <button
              className="btn btn-outline-primary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="btn btn-outline-primary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default AllPosts;