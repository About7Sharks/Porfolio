import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./components/myscss.scss";
import BlogPosts from "./components/journal/AllPosts";
import BlogPost from "./components/journal/Post";
import { Navbar } from "./components/navigation/Navbar";
import { BeforeLoad } from "./components/util/BeforeLoad";
// @ts-ignore
import luxy from "luxy.js";
import { ViewportProgress } from "./components/util/ViewportProgress";
const Projects = lazy(() => import("./components/projects/projects"));
const Drawer = lazy(() => import("./components/navigation/drawer"));

const Footer = lazy(() => import("./components/navigation/Footer"));
const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/about"));
const BackBTN = lazy(() => import("./components/navigation/backbutton"));
export default function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile: boolean = width <= 768;

  useEffect(() => {
    if (!isMobile) {
      luxy.init({ wrapperSpeed: 0.15 });
    } else {
      console.log("Using mobile default scroll");
    }
  }, []);
  return (
    <Suspense fallback={<BeforeLoad />}>
      <Router>
        {isMobile ? <Drawer /> : <Navbar />}
        <BackBTN />
        <ViewportProgress />
        <div id="luxy">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/journal" component={BlogPosts} />
            <Route path="/journal/:id" component={BlogPost} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}
