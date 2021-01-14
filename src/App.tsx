import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
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
  const [isMobile, setDeviceType] = useState<boolean>(false);
  function handleWindowSizeChange() {
    setDeviceType(window.innerWidth <= 768);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      luxy.init({ wrapperSpeed: 0.15 });
      console.log("Using custom scroller");
    } else {
      console.log("Using mobile default scroll");
    }
  }, [isMobile]);

  return (
    <Suspense fallback={<BeforeLoad />}>
      <Router>
        {isMobile ? <Drawer /> : <Navbar />}
        <BackBTN />
        <ViewportProgress />
        <img
          className="floatingBackground"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQxIiBoZWlnaHQ9IjU0NSIgdmlld0JveD0iMCAwIDg0MSA1NDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZikiPgo8cGF0aCBkPSJNNzMuNTExMiA0NjkuMDhDNjMuOTYzNyA0ODYuNjEzIDQ4Ljc5NzcgNDg1LjU4OCA0NS43NjcyIDQ4MS42NTZDNDMuNDQ0MSA0NzYuMTEyIDUxLjIwNjEgNDQ1LjY0MyA2Mi4xMjQ4IDQ0MS44ODRDNjEuODc1MyA0NDEuODI2IDYxLjczMzQgNDQxLjc3NSA2Mi4yMjYxIDQ0MS44NDlDNjIuMTkyMyA0NDEuODYxIDYyLjE1ODUgNDQxLjg3MiA2Mi4xMjQ4IDQ0MS44ODRDNjIuMzI0MiA0NDEuOTMgNjIuNTkyMiA0NDEuOTggNjIuNjYwNSA0NDEuOTc1QzcyLjc1MjEgNDQxLjE5IDc3Ljg3NzIgNDYxLjA2MiA3My41MTEyIDQ2OS4wOFoiIGZpbGw9IiNBRjc0RTgiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMl9mKSI+CjxwYXRoIGQ9Ik03NjIuODI0IDcwLjA3MjhDNzQ2LjU2MSA2Mi4xODM0IDc0NS43NjEgNDUuMjY2NiA3NDguODMxIDQxLjMyMDRDNzUzLjM3OCAzNy45MTEyIDc4MC42NTcgNDEuODYyOSA3ODUuMTMyIDUzLjM1OTJDNzg1LjE1NSA1My4wNzQ3IDc4NS4xODMgNTIuOTEwMiA3ODUuMTczIDUzLjQ2NkM3ODUuMTYgNTMuNDMwMyA3ODUuMTQ2IDUzLjM5NDggNzg1LjEzMiA1My4zNTkyQzc4NS4xMTUgNTMuNTg2NiA3ODUuMTAxIDUzLjg5MDUgNzg1LjExMyA1My45NjUyQzc4Ni45MTggNjQuOTk5IDc3MC4yNjEgNzMuNjgwNiA3NjIuODI0IDcwLjA3MjhaIiBmaWxsPSIjOTlDQzdEIi8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjNfZikiPgo8cGF0aCBkPSJNNjYuNjU5MSA3MC4yOTk5QzU1LjY4OTcgNjUuNzM5OSA1NS4xMjA3IDU2LjAyMTkgNTcuMTgyMiA1My43NjA4QzYwLjIzOTUgNTEuODEwNiA3OC42MjI5IDU0LjEyODQgODEuNjU3OSA2MC43Mzk0QzgxLjY3MjUgNjAuNTc2IDgxLjY5MTMgNjAuNDgxNiA4MS42ODU2IDYwLjgwMDhDODEuNjc2NSA2MC43ODAzIDgxLjY2NzMgNjAuNzU5OCA4MS42NTc5IDYwLjczOTRDODEuNjQ2MyA2MC44Njk5IDgxLjYzNzMgNjEuMDQ0NSA4MS42NDU3IDYxLjA4NzRDODIuODgwOSA2Ny40MjgxIDcxLjY3NTUgNzIuMzg1MiA2Ni42NTkxIDcwLjI5OTlaIiBmaWxsPSIjOTlDQzdEIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjM1NDYxNCIgeT0iMCIgd2lkdGg9Ijg0MC4xNjEiIGhlaWdodD0iNTQ0LjA0NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHg9IjUiIGR5PSIxMCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyNSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2YiIHg9IjQxLjM1NDYiIHk9IjQzNy44MTIiIHdpZHRoPSIzNy43MjMxIiBoZWlnaHQ9IjUwLjIzMzEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIyX2YiIHg9Ijc0MyIgeT0iMzYiIHdpZHRoPSI0Ni41MTUxIiBoZWlnaHQ9IjM5LjIyNDIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIzX2YiIHg9IjUzIiB5PSI1MCIgd2lkdGg9IjMxLjg5MzQiIGhlaWdodD0iMjQuMDAwMSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1ciIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
          alt=""
        />
        <img
          // style={{ top: "10%" }}
          className="floatingBackground2"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5MyIgaGVpZ2h0PSIyOTIiIHZpZXdCb3g9IjAgMCAxMDkzIDI5MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cGF0aCBkPSJNNzYuNjMxNyAxODcuMTE1QzQ0LjEyMjggMTcxLjM0NCA0Mi41MjI5IDEzNy41MjggNDguNjYwNiAxMjkuNjM5QzU3Ljc1MDUgMTIyLjgyNCAxMTIuMjggMTMwLjcyNCAxMjEuMjI2IDE1My43MDVDMTIxLjI3MSAxNTMuMTM2IDEyMS4zMjcgMTUyLjgwNyAxMjEuMzA4IDE1My45MThDMTIxLjI4MSAxNTMuODQ3IDEyMS4yNTQgMTUzLjc3NiAxMjEuMjI2IDE1My43MDVDMTIxLjE5IDE1NC4xNTkgMTIxLjE2MiAxNTQuNzY3IDEyMS4xODcgMTU0LjkxNkMxMjQuNzk0IDE3Ni45NzIgOTEuNDk4NCAxOTQuMzI3IDc2LjYzMTcgMTg3LjExNVoiIGZpbGw9IiNBRjc0RTgiLz4KPHBhdGggZD0iTTEwMjguODkgNzcuNzcxQzEwMTMuNjcgOTQuODQ5MyA5OTIuNzk4IDg5Ljk4NzEgOTg5LjA1MyA4NC44ODcyQzk4Ni40NzEgNzguMTc0NSAxMDAwLjY5IDQ2LjMyNTMgMTAxNi4yMyA0NC44NDMyQzEwMTUuOSA0NC43MTc4IDEwMTUuNzEgNDQuNjI2NSAxMDE2LjM4IDQ0LjgzMDNDMTAxNi4zMyA0NC44MzQzIDEwMTYuMjggNDQuODM4NiAxMDE2LjIzIDQ0Ljg0MzJDMTAxNi41MSA0NC45NDM0IDEwMTYuODcgNDUuMDY1NCAxMDE2Ljk3IDQ1LjA3NjNDMTAzMS4wMiA0Ni42ODU4IDEwMzUuODUgNjkuOTYwOSAxMDI4Ljg5IDc3Ljc3MVoiIGZpbGw9IiNBRjc0RTgiLz4KPHBhdGggZD0iTTk4My4yOTMgMjI5LjQ2N0M5NjEuNDEgMjE4Ljg1IDk2MC4zMzMgMTk2LjA4NyA5NjQuNDY0IDE5MC43NzdDOTcwLjU4MyAxODYuMTg5IDEwMDcuMjkgMTkxLjUwNyAxMDEzLjMxIDIwNi45NzZDMTAxMy4zNCAyMDYuNTkzIDEwMTMuMzggMjA2LjM3MiAxMDEzLjM3IDIwNy4xMkMxMDEzLjM1IDIwNy4wNzIgMTAxMy4zMyAyMDcuMDI0IDEwMTMuMzEgMjA2Ljk3NkMxMDEzLjI5IDIwNy4yODIgMTAxMy4yNyAyMDcuNjkxIDEwMTMuMjkgMjA3Ljc5MkMxMDE1LjcxIDIyMi42MzkgOTkzLjMwMSAyMzQuMzIxIDk4My4yOTMgMjI5LjQ2N1oiIGZpbGw9IiM5OUNDN0QiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTA5Mi45MyIgaGVpZ2h0PSIyOTEuMDE2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeD0iNSIgZHk9IjEwIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjI1Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="
          alt=""
        />
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
