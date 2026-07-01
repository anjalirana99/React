import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
const Grocery = lazy(()=>import("./components/Grocery")) //it will load as a seperate chunk only when needed( i.e grocery path)

const App = () => {
  
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}>  
                  <Grocery/>
                </Suspense>
      }
    ]
  },
  {
    path:"/restaurant",
    element:<Menu/>,
    errorElement:<Error/>
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
