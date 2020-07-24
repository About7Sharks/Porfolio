import React from 'react'
import './projects.scss'
import sites from './sites.js' //my sites data
import Button from '@material-ui/core/Button';
import Emoji from '../util/emoji'
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
let slides= sites.map(site=>{
  return{
    title:site.title,
    image:site.img,
    description:site.text,
    url:site.url,
    tags:site.tags
  }
})

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}






function Slide({ slide, offset}) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div className="slideBackground"/>
      <div className="slideContent"
        style={{backgroundImage: `url('${slide.image}')`}}>
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
          <Button variant="contained" color="primary" style={{cursor:'pointer',width:'100%'}} onClick={ () => window.open(slide.url)}>Visit</Button>
        </div>
      </div>
    </div>
  );
}





export default function App() {
  let history =useHistory()
  const [state, updateState] = React.useState({'projects': slides,slideIndex: 0});


  const slidesReducer = (event) => {
    if (event=== "NEXT") { updateState({...state,slideIndex:(state.slideIndex + 1) % slides.length}) }
    if (event=== "PREV") { updateState({...state, slideIndex:state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1}) }
  };
  const filterByTag = (e,value) => {
    let newList=slides.filter(site=>site.tags.includes(value))
    updateState({...state,projects:newList}) 
  }

  return (
    <div id='projects' className='projects'>
       <h1>Projects</h1>
       <p style={{textAlign:'center'}}>Here you can find some sites that i'm currently hosting on the interwebs <Emoji symbol='🕸️'/></p>
      <Button variant="contained" color="secondary" onClick={() => history.push('/projects2')}>Alternative View</Button>

      <Autocomplete id="searchBar" options={['AI','Javascript','Vue','IOT','HTML','React',]} multiple={false}
        onChange={filterByTag} renderInput={(params) => ( <TextField  {...params} label="Filter by project tag" margin="normal" variant="outlined"/>)} />

    <div className="slides">
      <button onClick={() =>slidesReducer("PREV")}>‹</button>
      {[...state.projects, ...state.projects, ...state.projects].map((slide, i) => {
      let offset = state.projects.length + (state.slideIndex - i);
      console.log(offset)
      return <Slide slide={slide} offset={offset} key={i} />;
    })}
      <button onClick={() => slidesReducer("NEXT")}>›</button>
    </div>
    </div>
  
  );
}
