import React from "react";
import ReactDOM from "react-dom/client";

//JSX Is not a part of React, neither HTML not fully javascript
// JSX is a java script XML to make easy elements in react or anywhere else
const JSXHeading = <h1>Hello from JSX</h1>;
// bable transpiler convert this JSX to React.CreateElement("h1",,"Hello from JSX"), then .render function converts it to real html and render on page
//JSX should be converst to javascript before running it on browser , browser dont understand JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(JSXHeading);
