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

IMPORTANT NOTE \_ Key points to remember:

You can have only one default export per file.
You can have multiple named exports per file.
You can import both default and named exports together, or just one of them.
