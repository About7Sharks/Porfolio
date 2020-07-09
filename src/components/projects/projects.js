import React, { Component } from 'react';
import sites from './sites.js' //my sites data
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



let projects = sites.map((site) => { 
  let tagButtons=site.tags.map(tag=><Button color="default" variant="outlined" key={tag} size="small">{tag}</Button>)

    return <div className='card' key={site.url}>
         <img style={{height:'290px'}} alt={site.url} src={site.img} title=""/>
         <div onClick={ () => window.open(site.url)} className='info'>
         <h3>{site.title}</h3>  
         <p>{site.text}</p> 
         <div className='actions'>
           Tags: &nbsp; {tagButtons}
         </div>
         </div>
        
         </div>});




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {'projects': projects};
  }
  
  filterByTag = (e,value) => {//tag input filter function
    //if input null set back to all
    if(value==null){return this.setState({projects: projects})}

    //create new site list if value isn't null
    let newSiteList=sites.map((site)=>{
      let tagButtons=site.tags.map(tag=><Button color="default" variant="outlined" key={tag} size="small">{tag}</Button>)
      if(site.tags.includes(value)){//if site includes tag create element 
     return <div className='card' key={site.url}>
        <img alt={site.url} src={site.img} title=""/>
        <div onClick={ () => window.open(site.url)} className='info'>
        <h3>{site.title}</h3>  
        <p>{site.text}</p> 
        <div className='actions'>
          Tags: &nbsp; {tagButtons}
        </div>
        </div>
       
        </div>}else{return ''}
    })
    this.setState({projects:newSiteList}) //update state with new list
  }
  render() {
    return (
      <div id='projects' className='projects'>
          <h1>Projects</h1>
          <p>Here you can find some sites that i'm currently hosting on the interwebs 🕸️</p>

      <Autocomplete
        id="searchBar"
        options={['AI','Javascript','Vue','IOT','HTML','React',]}
        multiple={false}
        onChange={this.filterByTag}
        renderInput={(params) => ( <TextField  {...params} label="Filter by project tag" margin="normal" variant="outlined"/>)}
      />



          <div className='cardContainer'>
            {this.state.projects}
          </div>
      </div>
      
    );
  }
}

export default Projects;