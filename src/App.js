import React from 'react';
import './components/myscss.scss';
import Projects from "./components/projects.js";
import Drawer from "./components/drawer.js"
import Home from './components/Home.js'
import BlogPosts from './components/blog/blogPosts'
import BlogPost from './components/blog/blogPostViewer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
   return (
    <Router>
     <Drawer/>
     <div>
     <Switch>
          
          <Route exact path="/blog">
           <BlogPosts/>
          </Route>
          <Route path='/blog/:id' component={BlogPost}/>

          <Route path="/about">
            <div>About</div>
          </Route>

          <Route path="/projects" component={Projects}/>

          <Route path="/contact">
          <div>Contact</div>
          </Route>
          <Route path={"/"| "/home"}>
            <Home/>
            {/* <Projects/>
            <BlogPosts/> */}
          </Route>
        </Switch>
        </div>
      </Router>
);
}
  


export default App;
