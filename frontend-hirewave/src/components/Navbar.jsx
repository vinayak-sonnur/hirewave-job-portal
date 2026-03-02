import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">HireWave</Link>
      <div>
        {!token ? (
          <>
            <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
            <Link className="btn btn-success" to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/posts">Jobs</Link>
            <Link className="btn btn-success me-2" to="/add">Post Job</Link>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;