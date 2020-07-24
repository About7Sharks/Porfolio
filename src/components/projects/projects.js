import React from 'react';
import sites from './sites.js' //my sites data
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Emoji from '../util/emoji'
import { useHistory } from "react-router-dom";



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




export default function Projects() {
  let history =useHistory()
  const [state, updateState] = React.useState({'projects': projects});

  const filterByTag = (e,value) => {//tag input filter function
    //if input null set back to all
    if(value==null){return this.setState({projects: projects})}

    //create new site list if value isn't null
    let newSiteList=sites.map((site)=>{
      let tagButtons=site.tags.map(tag=><Button color="default" variant="outlined" key={tag} size="small">{tag}</Button>)
      if(site.tags.includes(value)){//if site includes tag create element 
     return <div className='card' key={site.url}>
     <img style={{height:'290px'}} alt={site.url} src={site.img} title=""/>
     <div onClick={ () => window.open(site.url)} className='info'>
     <h3>{site.title}</h3>  
     <p>{site.text}</p> 
     <div className='actions'>
       Tags: &nbsp; {tagButtons}
     </div>
     </div>
    </div>}else{return ''}
    })
    updateState({projects:newSiteList}) //update state with new list
  }

    return (
      <div id='projects' className='projects'>
          <h1>Projects</h1>
          <p>Here you can find some sites that i'm currently hosting on the interwebs <Emoji symbol='🕸️'/></p>
          <Button variant="contained" color="secondary" onClick={() => history.push('/projects')}>Alternative View</Button>

      <Autocomplete
        id="searchBar"
        options={['AI','Javascript','Vue','IOT','HTML','React',]}
        multiple={false}
        onChange={filterByTag}
        renderInput={(params) => ( <TextField  {...params} label="Filter by project tag" margin="normal" variant="outlined"/>)}
      />
          <div className='cardContainer'>
            {state.projects}
          </div>
      </div>
      
    );
}

