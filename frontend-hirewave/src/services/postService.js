import api from "../api/axiosConfig";

export const getAllPosts = () => api.get("/allPosts");

export const searchPosts = (text) => api.get(`/posts/${text}`);

export const addPost = (post) => api.post("/post", post);
