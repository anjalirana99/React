import React, { lazy, Suspense, useState } from "react";
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
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";
const Grocery = lazy(()=>import("./components/Grocery")) //it will load as a seperate chunk only when needed( i.e grocery path)

const App = () => {
  const [user,setUser] = useState("Anjali")
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedinUser:user,setUser:setUser}}>
        <div className="app flex flex-col min-h-screen">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
    
    
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
      },
      {
        path:"/restaurantMenu",
        element:<Menu/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      }
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
