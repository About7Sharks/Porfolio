import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import './myscss.scss'
class Home extends Component {
  clickedArrow = (e,value) => {
      document.getElementById('projects').scrollIntoView()
  }
   render(){
    return  <div className="App">
            <p>Hi 👋, I'm Zach a fun loving software engineer 🧙‍♂</p>
            <span>
            <Link to={'/blog'}>Blog 🗒️</Link>   |   
            <Link to={'/projects'}>Projects 🚧</Link> |
            <Link to={'/about'}>About 🤷</Link>      
            </span>
          </div>
    }
}
export default Home
