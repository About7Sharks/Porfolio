import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorkerRegisterer";

ReactDOM.render(<App />, document.getElementById("root"));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
