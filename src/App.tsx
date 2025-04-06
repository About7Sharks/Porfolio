import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./styles/index.scss";
import { paths } from "./Config";
import { Navbar } from "./components/ui/navigation/Navbar";
import { BeforeLoad, ViewportProgress, checkForDevice } from "./util/index";
import { ContactFormProvider } from "./contexts/ContactFormContext";
const Drawer = lazy(() => import("./components/ui/navigation/drawer"));
const Footer = lazy(() => import("./components/ui/navigation/Footer"));
const BackBTN = lazy(() => import("./components/ui/navigation/backbutton"));
const Background = lazy(() => import("./components/ui/background"));

export default function App() {
  const [isMobile, setDeviceType] = useState<boolean>(checkForDevice());
  const handleWindowSizeChange = () => setDeviceType(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <Suspense fallback={<BeforeLoad />}>
      <ContactFormProvider>
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
      </ContactFormProvider>
    </Suspense>
  );
}
