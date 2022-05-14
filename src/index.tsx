import ReactDOM from "react-dom";
import App from "./App";
import ReactGa from 'react-ga'
import * as serviceWorker from "./serviceWorkerRegisterer";
ReactGa.initialize('UA-122885689-1')
ReactGa.pageview(window.location.pathname);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
