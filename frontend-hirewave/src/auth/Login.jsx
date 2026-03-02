import { useState } from "react";
import { login } from "../api/authService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await login(credentials);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);

    // Redirect to /home after login
    navigate("/posts");
  } catch (err) {
    alert("Invalid credentials");
  }
};

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login to HireWave</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100">Login</button>
          <p className="text-center mt-3">
            Don’t have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;