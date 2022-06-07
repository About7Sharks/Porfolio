import { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { motion } from "framer-motion";
import {config} from "Config"

let l =[<EmailIcon />,<GitHubIcon />,<TwitterIcon />,<LinkedInIcon />,<InstagramIcon />]
let LinksArray = config.linksArray.map((link:any,i:number)=>{
  return[
    link,
    l[i]
  ]
})

let colors = ["#00ab6c", "purple", "#60d9fe", "#0077b5", "#c13584"];
const Link = (item: [string, JSX.Element], i: number) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.a
      key={i}
      href={item[0] as string}
      target="_blank"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {item[1]}
      <motion.div
        style={{ backgroundColor: colors[i], transition: ".09s" }}
        animate={{ y: isHovered ? -5 : -80 }}
        className="backg"
      ></motion.div>
    </motion.a>
  );
};
export const SocialLinks = () => {
  return (
    <span className="socialLinks" style={{ cursor: "pointer" }}>
      {LinksArray.map((item, i) => {
        return Link(item as [string, JSX.Element], i);
      })}
    </span>
  );
};
