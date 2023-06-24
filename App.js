import React from "react";
import ReactDOM from "react-dom/client";

var heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
