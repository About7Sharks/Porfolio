import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import './myscss.scss'
class Home extends Component {
  clickedArrow = (e,value) => {
      document.getElementById('projects').scrollIntoView()
  }
   render(){
    return  <div className="App">
            {/* <div className='gradient'></div> */}
            <p>Hi 👋, I'm Zach a fun loving <h1 style={{display:'inline-flex',minWidth:'100%'}}>software engineer <span className='showHide'>_</span></h1> </p>
            <span>
            <Link to={'/journal'}>Journal 🗒️</Link>   |   
            <Link to={'/projects'}>Projects 🚧</Link> |
            <Link to={'/about'}>About 🤷</Link>      
            </span>
          </div>
    }
}
export default Home
// 🧙‍♂