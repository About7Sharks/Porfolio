import React from 'react';
import './components/myscss.scss';
import Projects from "./components/projects/projects.js";
import SliderProjects from "./components/projects/sliderProjects.js";
import Drawer from "./components/navigation/drawer.js"
import Footer from './components/navigation/footer'
import Home from './components/Home.js'
import About from './components/about/about'
import BlogPosts from './components/journal/AllPosts'
import BlogPost from './components/journal/Post'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import BackBTN from './components/navigation/backbutton'

function App() {
   return (
    <Router>
     <Drawer/>
     <BackBTN id="backBTN"/>
      <Switch>
          <Route exact path={["/","/home"]} component={Home}/>
          <Route exact path="/journal" component={BlogPosts}/>
          <Route exact path='/journal/:id' component={BlogPost}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={SliderProjects}/>
          <Route exact path="/projects2" component={Projects}/>
          <Route path='*' render ={()=> <Redirect to='/'/>}/>
      </Switch>
      <Footer/>
    </Router>
)}
  
export default App;
