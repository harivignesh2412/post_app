import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import { compareAsc, format } from "date-fns";
import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
// import Post from './Post';
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";
// import Router from '../src/Router.js';

function App() {
  
  return (
    <div className="App">
      <DataProvider>
      <Header title="your's friendly" />
      <Nav/>
      {/* <Router /> */}
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
        <Route path="post">
          <Route
            index element={
              <NewPost />
            }/>
          <Route
            path=":id"
            element={<PostPage  />}
          /> 
        </Route>
        <Route path="/edit">
          <Route path=":id" element={<EditPost/>}/>
        </Route>
      </Routes>
      <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
{
  /* <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<Missing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/postpage' element={<PostLayout/>}>
        <Route index element={<PostPage/>}/>
        <Route path=':id' element={<Post/>}/>
        <Route path='newpost' element={<NewPost/>}/>
        </Route>
      </Routes> */
}
// <nav>
// <ul>
//   <li><Link to="/home">Home</Link></li>
//   <li><Link to="/about">About</Link></li>
//   <li><Link to="/postpage">Post Page</Link></li>
// </ul>
// </nav>
