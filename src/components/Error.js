import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err=useRouteError();
    console.log(err)
    return(
        <div className="main-container">
             <h1>OOPS! Something Went Wrong.</h1>
             <h2>{err.status}-{err.statusText}</h2>
        </div>
       
    )
}
export default Error;