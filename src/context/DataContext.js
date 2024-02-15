import { createContext } from "react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "../api/posts";
import EditPost from "../EditPost";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();
  const { width } = useWindowSize();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  });
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    //  const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
    const dateTime = format(new Date(), "MMMM dd,yy pp");
    // const dateTime =  new Date().toLocaleDateString('en-GB')
    console.log(dateTime);
    const newPost = { id, title: postTitle, dateTime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`posts/${id}`);
      const postsLists = posts.filter((post) => post.id !== id);
      setPosts(postsLists);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (id) => {
    const dateTime = format(new Date(), "MMMM dd,yy pp");
    // const dateTime =  new Date().toLocaleDateString('en-GB')
    const updatedPost = { id, title: editTitle, dateTime, body: editBody };
    try {
      const response = await api.put(`posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DataContext.Provider
      value={{
        width,
        search,
        setSearch,
        searchResults,
        posts,
        handleDelete,
        postTitle,
        postBody,
        handleSubmit,
        setPostBody,
        setPostTitle,handleEdit,editBody,setEditBody,editTitle,setEditTitle
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
