import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactGA from 'react-ga';
import { HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import "./styles/index.scss";
import { paths } from "./Config";
import { Navbar } from "./components/navigation/Navbar";
import { BeforeLoad, ViewportProgress, checkForDevice } from "./util/index";
const Drawer = lazy(() => import("./components/navigation/drawer"));
const Footer = lazy(() => import("./components/navigation/Footer"));
const BackBTN = lazy(() => import("./components/navigation/backbutton"));
const Background = lazy(() => import("./components/ui/background"));

ReactGA.initialize('G-4490T0Z5S8'); // Replace with your Google Analytics tracking ID

export default function App() {
  const [isMobile, setDeviceType] = useState<boolean>(checkForDevice());
  function handleWindowSizeChange() {
    setDeviceType(window.innerWidth <= 768);
  }
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
        <Background />
        <div id="mainApp">
          <Switch>
            {paths.map(({ exact = true, path, component }, i) => {
              return (
                <Route
                  key={i}
                  exact={exact}
                  path={path}
                  component={component}
                />
              );
            })}
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}
