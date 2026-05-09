import React from "react";
import ReactDOM from "react-dom/client";

//JSX Is not a part of React, neither HTML not fully javascript
// JSX is a java script XML to make easy elements in react or anywhere else
const JSXHeading = <h1>Hello from JSX</h1>;
//if want to put multiple lines in JSX wrap them around () braces
// const JSXHeading = (
//<h1>Hello from JSX</h1>
//<h2> Welcome</h2>
// );
// bable transpiler convert this JSX to React.CreateElement("h1",,"Hello from JSX"), then .render function converts it to real html and render on page
//JSX should be converst to javascript before running it on browser , browser dont understand JSX

// React Component - 1. Funtional (New Way) 2 .class Component (older way)
// you cn simply conver tthe above jsx to eact functional component by putting it inside function (most common practice arrow funct)
// in jsx inside () werything is treat as a single element  and
//  in arrow if there is only single thing to be return we ignore puting curly brace and retunr ststement
// like const fn=()={return true } can be write as const fn=()=>true;
const HeadingComponent = () => <h1>Hello from React Component</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(JSXHeading);

// to render Functional Componenet inside root wrap them in <> with closeing tag ,
//  thats how bable understand it is a functional component and transform it to React component which than
// .render of React converts to real html and render it on dom

// COMPONENT COMPOSITION-
const Title = () => <h1 className="title"> This is a React APP</h1>;
const BodyComponent = () => (
  <div id="parent">
    <Title />
    <h1>Hello This is Componenet Composition.</h1>
    <p>Using one compopent Title inside other body OR </p>
    <p>Combining multiple component to make larger UI</p>
  </div>
);

root.render(<BodyComponent />);
