import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Emoji from '../util/emoji'
const aboutStyles = {
    about:{
        paddingTop:'10px',
        color:'white',
        maxWidth: '620px',
        margin: '0 auto',
        display:'inline-flex'
    },
    links:{
        color:'white'
    }
  };


export default function About(){
    return <div className='about' style={aboutStyles.about}>
        <h1>About</h1>
        <h2>This site</h2>
        <p>I made this as a way to improve my React.js skills, and mess around with some new decentralized services. If you're viewing this from https://zacarlin.eth.link or https://zacarlin.crypto you are seeing this via the IPFS and utilizing the Ethereum Name Services or Unstoppable domains; making this site <strong>Uncensorable.</strong>
        </p>
        <h2>My Work</h2>
        <p> Currently working as a Software Engineer at <a style={aboutStyles.links} href='http://gulfphotonics.com/' target='_blank' rel="noopener noreferrer">Gulf Photonics</a><Emoji symbol='💡'/> on <a style={aboutStyles.links} href='https://accubrew.io' target='_blank' rel="noopener noreferrer">Accubrew</a><Emoji symbol='🍻'/>  based in Tampa, FL. </p>
  
<h2>Hobbies</h2>
<ul>
<li><p>Bodybuilding <Emoji symbol='🏋️‍♂️'/></p></li> 
  <li><p>Coding <Emoji symbol='💻'/></p></li> 
  <li><p>Going to Florida beaches <Emoji symbol='🌊'/></p></li> 
  <li><p>Traveling <Emoji symbol='🏞'/></p></li> 
  <li><p>Learning Blockchain Technology <Emoji symbol='🏗️'/></p></li> 
  <li><p>Listening to Podcasts and <a target='_blank' rel="noopener noreferrer" style={aboutStyles.links} href='https://open.spotify.com/playlist/37i9dQZF1EphhdCcTha7XI?si=cur9rcxGThiBeHUOPbFRhA'>music</a><Emoji symbol='🎧'/></p></li>  
  <li><p>Reading <Emoji symbol='📚'/></p></li>  
  <li><p>Penetration Testing <Emoji symbol='🧨'/></p></li> 
  <li><p>GF <Emoji symbol='👩🏻‍⚕️'/></p></li> 
</ul>
 

<span><h2>Resume</h2>&nbsp;-&nbsp;<p><a target='_blank' rel="noopener noreferrer" style={aboutStyles.links} href='https://xordrive.io/?p=sockrates.id.blockstack_bb3677d1-8f10-4be7-a29c-02b80b60d6c0'>View / Download</a></p></span>


<span style={{cursor:'pointer'}}>
<EmailIcon onClick={ ()=>window.open('mailto:zacarlin@gmail.com')}/>
<GitHubIcon onClick={ () => window.open('https://github.com/about7sharks')}/>
<TwitterIcon onClick={ () => window.open('https://twitter.com/ZacharyCarlin')}/>
<LinkedInIcon onClick={ () => window.open('https://www.linkedin.com/mwlite/in/zachary-carlin-85402a123')}/>
<InstagramIcon onClick={ () => window.open('https://Instagram.com/zachary_carlin')}/>
</span>
    </div> 

}