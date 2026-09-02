import React, { lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./styles/index.scss";
import "./styles/love.scss";
import { useLove } from "./util/love";
import { paths } from "./Config";
import { Navbar } from "./components/ui/navigation/Navbar";
import { BeforeLoad, ViewportProgress } from "./util/index";
import { ContactFormProvider } from "./contexts/ContactFormContext";
const Footer = lazy(() => import("./components/ui/navigation/Footer"));
const BackBTN = lazy(() => import("./components/ui/navigation/backbutton"));
const Background = lazy(() => import("./components/ui/background"));
const NotFound = lazy(() => import("./components/ui/navigation/NotFound"));

export default function App() {
  useLove();

  return (
    <Suspense fallback={<BeforeLoad />}>
      <ContactFormProvider>
        <Router>
          <Navbar />
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
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ContactFormProvider>
    </Suspense>
  );
}
