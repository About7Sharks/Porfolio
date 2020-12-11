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
const Projects = lazy(() => import("./components/projects/projects.js"));
const Drawer = lazy(() => import("./components/navigation/drawer.js"));
const Footer = lazy(() => import("./components/navigation/footer"));
const Home = lazy(() => import("./components/Home.js"));
const About = lazy(() => import("./components/about/about"));
const BackBTN = lazy(() => import("./components/navigation/backbutton"));

const renderLoader = () => <p>Loading ...</p>;

function App() {
  return (
    <Suspense fallback={renderLoader()}>
      <Router>
        <Drawer />
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

export default App;
