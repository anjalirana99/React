import React from "react";
import ReactDOM from "react-dom/client";
{
  /* <div id="parent">
            <div id="child">
                <h1 id="heading1"></h1>
            </div>
     </div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1", key: "h1" }, "Hello Heading1"),
    React.createElement("h1", { id: "heading2", key: "h2" }, "Hello Heading2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
