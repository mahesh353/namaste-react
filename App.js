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

const TitleComponent = () => (
  <h1 id="heading" className="head">
    Namaste React using JSX !
  </h1>
);

//React Components
const HeadingComponent = () => {
  return (
    <>
      <div id="container">
        {/* <TitleComponent /> */}
        {jsxHeading}
        <h1> Namaste React Functional component !</h1>
      </div>
      <div></div>
    </>
  );
};

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
