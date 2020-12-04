import React from 'react';
import sites from './sites.js' //my sites data
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Emoji from '../util/emoji'
import { useHistory } from "react-router-dom";
import SliderProjects from "./sliderProjects.js"



let projectsList = sites.map((site) => {
  let tagButtons = site.tags.map(tag => <Button color="default" variant="outlined" key={tag} size="small">{tag}</Button>)

  return <div className='card' key={site.url}>
    <img style={{ height: '290px' }} alt={site.url} src={site.img} title="" />
    <div onClick={() => window.open(site.url)} className='info'>
      <h3>{site.title}</h3>
      <p>{site.text}</p>
      <div className='actions'>
        Tags: &nbsp; {tagButtons}
      </div>
    </div>
  </div>
});




export default function Projects() {
  let history = useHistory()
  const [projects, updateProjects] = React.useState({ 'projects': projectsList });
  const [alternate, setAlternate] = React.useState(false);

  const filterByTag = (e, value) => {//tag input filter function
    //if input null set back to all
    if (value == null) { return this.updateProjects({ projects: projectsList }) }

    //create new site list if value isn't null
    let newSiteList = sites.map((site) => {
      let tagButtons = site.tags.map(tag => <Button color="default" variant="outlined" key={tag} size="small">{tag}</Button>)
      if (site.tags.includes(value)) {//if site includes tag create element 
        return <div className='card' key={site.url}>
          <img style={{ height: '290px' }} alt={site.url} src={site.img} title="" />
          <div onClick={() => window.open(site.url)} className='info'>
            <h3>{site.title}</h3>
            <p>{site.text}</p>
            <div className='actions'>
              Tags: &nbsp; {tagButtons}
            </div>
          </div>
        </div>
      }
    })
    updateProjects({ projects: newSiteList }) //update state with new list
  }

  return (
    <div id='projects' className='projects'>
      <h1>Projects</h1>
      <p>Here you can find some sites that i'm currently hosting on the interwebs <Emoji symbol='🕸️' /></p>
      {/* <Button variant="contained" color="secondary" onClick={() => setAlternate(!alternate)}>Alternative View</Button> */}

      <Autocomplete
        id="searchBar"
        options={['AI', 'Javascript', 'Vue', 'IOT', 'HTML', 'React',]}
        multiple={false}
        onChange={filterByTag}
        renderInput={(params) => (<TextField  {...params} label="Filter by project tag" margin="normal" variant="outlined" />)}
      />
      {alternate ? <SliderProjects /> : <div className='cardContainer'>
        {projects.projects}
      </div>}

    </div>

  );
}

