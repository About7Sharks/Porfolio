import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./styles/index.scss";
import {paths} from './Config'
import { Navbar } from "./components/navigation/Navbar";
import { BeforeLoad, ViewportProgress, checkForDevice } from "./util/index";
const Drawer = lazy(() => import("./components/navigation/drawer"));
const Footer = lazy(() => import("./components/navigation/Footer"));
const BackBTN = lazy(() => import("./components/navigation/backbutton"));
const Background = lazy(() => import("./components/ui/background"));

// Buffer is not defined error fix
// https://stackoverflow.com/questions/68707553/uncaught-referenceerror-buffer-is-not-defined
// Do to webpack and having created the app with old version of create-react-app
window.Buffer = window.Buffer || require("buffer").Buffer;


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
            {paths.map(({exact=true, path, component } ,i )=>{
              return <Route key={i} exact={exact} path={path} component={component} />
            })}    
            <Route path="*" render={() => <Redirect to="/" />} /> 
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}
