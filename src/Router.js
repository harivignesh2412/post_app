import React from "react";

import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from "../src/Home.js";
import Nav from '../src/Nav.js';
import NewPost from '../src/NewPost.js';
import PostPage from '../src/PostPage.js';
import About from '../src/About.js';
import Missing from '../src/Missing.js';

function Router(){
    return(
        <div>
           <BrowserRouter>
           <Routes>
           <Route exact path="edit">
            <Route/></Route>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default Router;