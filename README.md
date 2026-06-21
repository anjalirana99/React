React

2nd commit -

1.  we want this code to make production ready

2.  we want various powers other than react to make our code production ready so we will use npm
3.  we make our project a NPM project
    npm init
    pkg.json
    pkg-lock.json
    node_modules

4.  now we want the minification , compression , bundling of our files
    npm install -D parcel

5.  we want react libraries at our end to avoid making epensive network calls over cdn
    npm install react
    npm install rect-dom

6.  now to use react in our code
    import React and ReactDOM (previous one was refering to those which came form cdn )
7.  now ignite the app making the dev build
    npx parcel index.html (npx execute node package - package name parcel - entry point index.html)
8.  parcel will through error browser scipt should not have import or export
    add type = "module" in script tag of app.js
9.  again run command ,
    dev build is ready - make parcel cache for faste rebuilding and dist for final build code
    dev server start - at localhost:1234
    build host at local server

10. PARCEL provide many functionalities -
    dev build
    dev server
    host build at dev server
    optimising of file
    tree shaking remove unused code
    minification
    bundling
    HMR - hot module replacement by file watching algo
    content hashing - hashing base on content
    code spliting
    differential bundling - differnet bundle for differen broweser and version , can pass list in browserlist of pkg.json
    Diagnostic

11. production build is more optimized than dev build

12. which can be recreated again on server shoul not be pushed to git like
    node_module - when run npm install command to install dependecies (done on servr as well)
    parcel-cache - when run command for making build (done on servr as well)
    dist - when run command for making build (done on servr as well)

13. parcel provide the local/dev server not the prod server hence when you run npx parcel build index.html production build created but localserver can reflect those chngs

14. instead of running long command again and agin on terminal
    add custom command in script of pkg.json
    you can run this command for performing task like creating build or running you scripts

            "scripts": {
            "start" : "npx parcel index.html",
            "build" : "npx parcel build index.html",
            "test": "jest"
        },

        npm run <script-name >   can be npm start for start only as start is a reserved word in npm it understand npm start is npm run start

        for all other run should be there

React - cleaning the code
-> its a good practice to put all frontend code in a src folder
-> its a good practice to make a seperate file for each component like header footer body - Restraunt card - it helps in modularity and resuability of code

==============export/import are done in 2 ways

1-Default export / import
export default component
import component from "path"
use in code component as <component />
variable as {var}

2-Named export / import
export const component/variable
import {const/component} from "path"
use in code component as <component />
variable as {var}

3 - \* as Export (Namespace Import)

Used to import everything under one object.

Export:
export const a = 10;
export const b = 20;

Import:
import \* as values from "./file.js";

Usage:
console.log(values.a); // 10
console.log(values.b); // 20

IMPORTANT NOTE \_ Key points to remember:

You can have only one default export per file.
You can have multiple named exports per file.
You can import both default and named exports together, or just one of them.

=======STATIC DATA UNDER UTIL FOLDER ==============
its a good practice that compoennts should not have any hard coded data inside them move hose constant and json static data inside utils folder under different file

In React projects, a utils (utilities) folder is used to store reusable helper functions that are not UI components.

It helps keep your code:

cleaner
reusable
organized
easier to maintain

============================CONCEPT - REACT HOOKS====================
const means:

the variable reference cannot be reassigned

It does not mean the array contents are immutable.
so const arr = [1,2]
doing arr = [2,3] is wrong we are changing the reference of arr here
but doing arr.push(4) is fine because we are not changing the reference here

WHAT ARE REACT HOOKS ?

- at the end of the day they are just utility JS functions written inside React code
  they are provide some / features to the Functional component like using -
  state
  lifecycle methods
  context
  refs
  side effects

Before hooks, these features mainly required class components.

=============MOST COMMON REACT HOOKS =================
1.useState - Used for component state. - PRVOIDE US POWERFUL STATE VARIABLES -- KEEP MY UI IN SYNC WITH DATA LAYER
const [count, setCount] = useState(0);
count → current value
setCount → updates value

-> WHENEVER A STATE VARIABLE CHANGES THE REACT RERENDER THE COMPONENT - EVEN IF THE STATE CHANGES BY CHILD COMPOENT OR ANYWHERE IN THE CODE REACT WILL RERENDER THE COMPONENET IN WHICH THE STATE WAS DEFINED.along with its child components (unless optimizations prevent it).

-> Important Clarification-
1_React only re-renders if the state value actually changes. ---
setcount(5) setcount(5)--- The second update may not trigger another render because the value is unchanged.

2_Child Components and Re-rendering
Normally, children also re-render when the parent re-renders:
But React optimizations like:

React.memo
useMemo
useCallback

can prevent unnecessary child renders.

3_Updating a state variable causes React to re-render the component that owns that state. The update can originate from anywhere (child component, event handler, API call, etc.), but the owning component re-renders when the state changes.

2.useEffect --- Used for:

API calls
timers
subscriptions
DOM updates

useEffect(() => {
console.log("Component mounted");
}, []);

The empty array means:

run once after first render

3.useContext -- Access shared/global data.

4.useRef -- Stores mutable values or accesses DOM elements.

5.useMemo --- Optimizes expensive calculations.

6. useCallback -----Memoizes functions.

========================Rules of Hooks
Hooks must:

be called at the top level
not be inside loops/conditions
only be used in React components or custom hooks

Correct:

function App() {
const [count, setCount] = useState(0);
}

Wrong:

if (true) {
useState(0); // ❌
}

| Hook          | Purpose                 |
| ------------- | ----------------------- |
| `useState`    | Store data              |
| `useEffect`   | Run side effects        |
| `useContext`  | Share data              |
| `useRef`      | Access DOM/store values |
| `useMemo`     | Cache calculations      |
| `useCallback` | Cache functions         |

=============== why webapp using react are fast= SUPER POWER OF REACT====================
####REACT MAKES DOM OPERATION SUPERFAST AND EFFICIENT -
along with the help of bundleres (superpowers of parcel) , transpilers(super power of babel) , it became a good for large scale application

HOW REACT WORKS BEHIND THE SCENE ?

RECONCILIATION ALGO - REACT FIBRE (RECONCILIATION ENGINE)-

VIRTUAL DOM - representation of actual DOM

- remember what React.createElement returns an object na ..
  then we use jsx to write what we pass in React.CreateElement -
  now bigger jsx is also a nested jsx that is nested react.createElemet
  that bigger structure is also a jaascript object thats the repesentaion of actual dom ,

========In React, reconciliation is the process React uses to compare:

the previous UI
and the new UI

to determine:

what actually changed in the DOM.

=====React Fiber is the internal rendering engine of React introduced in React 16.

It completely rewrote React’s reconciliation algorithm to make rendering:

faster
interruptible
prioritized
smoother for large apps

=======NOTE-
findind diffrence betwenn two html is slow find the difference betwenn 2 object is fast thats what react use virtual dom(object) of actual html\

WHY REACT IS FAST ?
because it do efficient dom manipulation how ?
virtual dom , diffing algo , spiting updation in chunks

===================What is config.js? (like constant.js we made for logo url , cdn url )

It is a file where you store:

environment-specific or reusable settings

Example:

export const API_URL = "https://api.example.com";
export const TIMEOUT = 5000;

========Why is config.js Important?

1. Centralized Configuration - in src folder app , related to api urls , timeout, app seetings, environment values

Instead of repeating values everywhere:

❌ Bad:

fetch("https://api.example.com/users");
fetch("https://api.example.com/posts");

✅ Good:

import { API_URL } from "./config";

fetch(`${API_URL}/users`);
fetch(`${API_URL}/posts`);



======================CONNECT TO EXTERNAL WORLD - MAKE API CALLS-================
a-Monolithic architecture  - Where all modeule/services code present in a single codebase 

b-MICROSERVICE architecture - where differnet serivces have different code base 
these service run on different port of servers and connect to each other by making API call _

c-Single Responsibility Principle (SRP)
SRP states:
A software module should have only one reason to change.

d- Seperation of concern 
Each component focuses on a specific concern.

e - SoC vs SRP
Separation of Concerns	                              Single Responsibility Principle
Broad architectural principle	                    Specific design principle
Separates different concerns in a system	             Ensures a module has one reason to change
Applies at all levels (layers,modules,services)	      Usually applies to classes, modules, services
Focuses on reducing coupling	                            Focuses on responsibility boundaries

Think of it this way:

SoC = "Separate different kinds of work."
SRP = "Each component should have one responsibility."



how we can make api calls from frontend service to backend service

1. Page load -> API call -> UI render 

2. Page Load -> Render Static Page(SHIMMER UI) -> API CALL -> RERENDER COMPONENT

2nd approach has beeter user experience we can use this approah using useEffect react hook

---- useEffect take 2 arguments on is callback function and other is dependency array 
callback is called after first render of component 

If the dependency array is empty ([]):
Runs after the first render (mount).
Does not run again on re-renders.

If the dependency array contains values:
Runs after the first render.
Runs again whenever values changes.



-- why we use  usestate hooks state variable if we have local variables?
to keep data and ui in sync 
whenever a state variable changes React rerenders a component  



-------------SHIMMER UI _---
Its a loading placehlder UI that we show while data is fetch from server ----- istead of a loading svg - for better user experience  


