import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from "./components/projects.js";
import Drawer from "./components/drawer.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
   return (
     <Router>
      <Drawer/>

  <div>
    <Switch>
      {/* If the current URL is /about, this route is rendered
          while the rest are ignored */}
      <Route path="/about">
        <div>About</div>
      </Route>

      {/* Note how these two routes are ordered. The more specific
          path="/contact/:id" comes before path="/contact" so that
          route will render when viewing an individual contact */}
      <Route path="/projects">
          <Projects/>
      </Route>
      <Route path="/contact">
      <div>Contact</div>
      </Route>
      <Route path="/techused">
      <div>Tech Used</div>
      </Route>

      <Route path={"/home"| "/"}>
     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
     

          Learn React
        </a>
      </header>
      <Projects/>
    </div>

      </Route>
    </Switch>
  </div>
  </Router>
);
}
  


export default App;
