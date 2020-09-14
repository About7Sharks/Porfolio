import React from 'react';
import {  Link } from "react-router-dom";
import './myscss.scss'
import Emoji from './util/emoji'

function Home (){
  return(
      <div className="App">
      {/* <img className='BackgroundIMG' src='https://res.cloudinary.com/sockrates/image/upload/v1599758087/compressUnder1MB_jkmyys.jpg'/> */}
      <span><p>Hi <Emoji symbol='👋'/>, I'm Zach a fun loving</p> <h1 >software engineer <span className='showHide'>_</span></h1> </span>
      <span>
      <Link to={'/journal'}>Journal <Emoji symbol='🗒️'/></Link>   |   
      <Link to={'/projects'}>Projects <Emoji symbol='🚧'/></Link> |
      <Link to={'/about'}>About <Emoji symbol='🤷'/></Link>      
      </span>
    </div>
)}

export default Home
