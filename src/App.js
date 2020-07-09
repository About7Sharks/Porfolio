import React from 'react';
import './components/myscss.scss';
import Projects from "./components/projects/projects.js";
import Drawer from "./components/drawer.js"
import Home from './components/Home.js'
import About from './components/about/about'
import BlogPosts from './components/journal/AllPosts'
import BlogPost from './components/journal/Post'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BackBTN from './components/navigation/backbutton'

function App() {
   return (
    <Router>
     <Drawer/>
     <BackBTN id="backBTN"/>

     <div>
     <Switch>
          
          <Route exact path="/journal">
           <BlogPosts/>
          </Route>
          <Route path='/journal/:id' component={BlogPost}/>

          <Route path="/about">
            <About/>
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
