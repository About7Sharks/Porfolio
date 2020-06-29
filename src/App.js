import React from 'react';
import './App.css';
import Projects from "./components/projects.js";
import Drawer from "./components/drawer.js"
import Home from './components/Home.js'
import TechUsed from './components/TechUsed.js'
import BlogPosts from './components/blogPosts'
// import Blog from './components/TechUsed.js'
import BlogPost from './components/blogPostViewer'
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

          <Route path="/techused" component={TechUsed}/>
          <Route path={"/"| "/home"}>
            <Home/>
            <Projects/>
          </Route>
        </Switch>
        </div>
      </Router>
);
}
  


export default App;
