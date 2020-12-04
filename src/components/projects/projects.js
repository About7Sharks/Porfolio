import React from 'react';
import sites from './sites.js' //my sites data
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Emoji from '../util/emoji'
import SliderProjects from "./sliderProjects.js"
import Tooltip from '@material-ui/core/Tooltip';



const projectsList = (e, filter) => {
  let dog = sites
  if (filter !== undefined && filter !== 'All') {
    dog = sites.filter(site => {
      return site.tags.includes(filter)
    })
  }
  return dog.map((site) => {
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
  })
}



export default function Projects() {
  const [projects, updateProjects] = React.useState({ 'projects': projectsList() });
  const [alternate, setAlternate] = React.useState(false);


  //return the unique tags in sites.js files
  const siteTags = ['All', ...new Set(sites.reduce((tags, site) => tags.concat(site.tags), []))]

  return (
    <div id='projects' className='projects'>
      <h1>Projects</h1>
      <p>Here you can find sites that i'm currently hosting on the interwebs<Emoji symbol='🕸️' /></p>
      {/* <Button variant="contained" color="secondary" onClick={() => setAlternate(!alternate)}>Alternative View</Button> */}

      <Autocomplete
        id="searchBar"
        options={siteTags}
        multiple={false}
        onChange={((e, d) => { updateProjects({ projects: projectsList(e, d) }) })}
        renderInput={(params) => (<TextField  {...params} label="Filter by project tag" margin="normal" variant="outlined" />)}
      />
      <br />
      <Tooltip title="Takes you to a random site in the list!">
        <Button onClick={() => { window.open(sites[Math.floor(Math.random() * sites.length + 1)].url) }} variant='contained'>Random Site</Button>
      </Tooltip>
      {alternate ? <SliderProjects /> : <div className='cardContainer'>
        {projects.projects}
      </div>}
    </div>
  );
}

