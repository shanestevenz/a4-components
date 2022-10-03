import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
import "./styles.css.proxy.js";


var mountNode = document.getElementById("app");
ReactDOM.render( <App name="Jane" />, mountNode );