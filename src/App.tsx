import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "styles/index.scss";
import { Navbar } from "components/navigation/Navbar";
import { BeforeLoad, ViewportProgress, checkForDevice } from "util/index";
const Drawer = lazy(() => import("components/navigation/drawer"));
const Footer = lazy(() => import("components/navigation/Footer"));
const BackBTN = lazy(() => import("components/navigation/backbutton"));
const Background = lazy(() => import("components/ui/background"));

let paths = [
  {
    path:["/","/home"],
    component: lazy(() => import("components/home/Home")), 
    exact: true,
  },
  {
    path:"/journal",
    component:lazy(() => import("components/journal/AllPosts")),
    exact: true,
  },
  {
    path:"/journal/:id",
    component:lazy(() => import("components/journal/Post")),
    exact: false,
  },
  {
    path: '/about',
    component: lazy(() => import("components/about")),
    exact: true,
  },
  {
    path: '/projects',
    component: lazy(() => import("components/projects/projects")),
    exact: true,
  },
  // {
  //   path: "*",
  //   render: ()=> <Redirect to="/"/>,
  //   exact: false
  // }
]

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
            {paths.map(({exact=true,path,component},i)=>{
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
