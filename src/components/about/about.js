import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const aboutStyles = {
    about:{
        paddingTop:'10px',
        minHeight:'100vh',
        color:'white',
        maxWidth: '620px',
        margin: '0 auto'
    },
    links:{
        color:'white'
    }
  };


export default function About(){

    return ( <div className='about' style={aboutStyles.about}>
        <h1>About</h1>
        <h2>Work</h2>
        <p> Currently working as a Software Engineer at <a style={aboutStyles.links} href='http://gulfphotonics.com/' target='_blank'>Gulf Photonics</a>💡 on <a style={aboutStyles.links} href='https://accubrew.io' target='_blank'>Accubrew</a> 🍻 based in Tampa, FL. </p>
  
<h2>Hobbies</h2>
{/* <p>I like to stay busy</p> */}
<ul>
<li><p>Bodybuilding 🏋️‍♂️</p></li> 
  <li><p>Coding 💻</p></li> 
  <li><p>Going to Florida beaches 🏖</p></li> 
  <li><p>Traveling 🏞</p></li> 
  <li><p>Learning Blockchain Technology 🏗️</p></li> 
  <li><p>Listening to Podcasts and <a target='_blank' style={aboutStyles.links} href='https://open.spotify.com/playlist/37i9dQZF1EphhdCcTha7XI?si=cur9rcxGThiBeHUOPbFRhA'>music</a> 🎧</p></li>  
  <li><p>Reading 📚</p></li>  
  <li><p>Penetration Testing 🧨</p></li> 
  <li><p>GF 👩🏻‍⚕️</p></li> 
</ul>
 

<span><h2>Resume</h2>&nbsp;-&nbsp;<p><a target='_blank' style={aboutStyles.links} href='https://pdrive.co/sharedfiles?u=sockrates.id.blockstack&i=d3005c20-bbbe-432c-8085-21313767e864'>Download</a></p></span>

<h2>This site</h2>

<p>I made this as a way to improve my React.js skills, and mess around with some new decentralized services. If you're viewing this from https://zacarlin.eth.link or https://zacarlin.crypto you are seeing this via the IPFS and utilizing the Ethereum Name Services or Unstoppable domains; making this site <strong>Uncensorable.</strong>
</p>




<span style={{marginTop:'25px',cursor:'pointer'}}>
<EmailIcon onClick={ ()=>window.open('mailto:zacarlin@gmail.com')}/>
<GitHubIcon onClick={ () => window.open('https://github.com/about7sharks')}/>
<TwitterIcon onClick={ () => window.open('https://twitter.com/ZacharyCarlin')}/>
<LinkedInIcon onClick={ () => window.open('https://www.linkedin.com/mwlite/in/zachary-carlin-85402a123')}/>
<InstagramIcon onClick={ () => window.open('https://Instagram.com/zachary_carlin')}/>
</span>
    </div> )

}