import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "styles/index.scss";
import BlogPosts from "components/journal/AllPosts";
import BlogPost from "components/journal/Post";
import { Navbar } from "components/navigation/Navbar";
import { BeforeLoad, ViewportProgress, checkForDevice } from "util/index";
const Projects = lazy(() => import("components/projects/projects"));
const Drawer = lazy(() => import("components/navigation/drawer"));
const Footer = lazy(() => import("components/navigation/Footer"));
const Home = lazy(() => import("components/home/Home"));
const About = lazy(() => import("components/about"));
const BackBTN = lazy(() => import("components/navigation/backbutton"));
const Background = lazy(() => import("components/ui/background"));

export default function App() {
  const [isMobile, setDeviceType] = useState<boolean>(checkForDevice());
  function handleWindowSizeChange() {
    setDeviceType(window.innerWidth <= 768);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <Suspense fallback={<BeforeLoad />}>
      <Router>
        {isMobile ? <Drawer /> : <Navbar />}
        <BackBTN />
        <ViewportProgress />
        <Background/>
        <div id="mainApp">
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
