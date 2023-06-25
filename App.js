import React from "react";
import ReactDOM from "react-dom/client";

//React.CreateElement => React elements - JS Object => HtmlElement(When we render it);
var heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React123 !"
);

// JSX => React.CreateElement => React elements - JS Object => HtmlElement(When we render it);
// React Element
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX !
  </h1>
);

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
