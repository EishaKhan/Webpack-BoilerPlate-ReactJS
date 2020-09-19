import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Banner from './components/Banner/Banner';
import "./styles/global.scss";

ReactDOM.render(
  <div>
    <Banner name="Eisha khan" />
   

  </div>,
  document.getElementById("app"),
);