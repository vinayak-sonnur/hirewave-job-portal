import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import AddPost from "./pages/AddPost";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Private Routes */}
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/posts" element={<PrivateRoute><AllPosts /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddPost /></PrivateRoute>} />

        {/* Redirect unknown */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;