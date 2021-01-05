import React, { lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./components/myscss.scss";
import BlogPosts from "./components/journal/AllPosts";
import BlogPost from "./components/journal/Post";
import { Navbar } from "./components/navigation/Navbar.tsx";
import { BeforeLoad } from "./components/util/BeforeLoad";
const Projects = lazy(() => import("./components/projects/projects"));
const Drawer = lazy(() => import("./components/navigation/drawer"));

const Footer = lazy(() => import("./components/navigation/Footer"));
const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/about"));
const BackBTN = lazy(() => import("./components/navigation/backbutton"));

export default function App() {
  return (
    <Suspense fallback={<BeforeLoad />}>
      <Router>
        {window.innerWidth < 800 ? <Drawer /> : <Navbar />}
        <BackBTN id="backBTN" />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/journal" component={BlogPosts} />
          <Route path="/journal/:id" component={BlogPost} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}
