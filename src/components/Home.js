import React, { Component } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './myscss.scss'
class Home extends Component {
  clickedArrow = (e,value) => {
      document.getElementById('projects').scrollIntoView()
  }
   render(){
       return <div className="App">

   <header className="App-header">
     <p style={{margin:'150px 30px 0px 30px',textAlign:'left'}}> 
       I'm Zach a fun loving software engineer
     </p>

     <KeyboardArrowDownIcon onClick={()=>this.clickedArrow()} className="floating" />
   </header>
   </div>}
}
export default Home
