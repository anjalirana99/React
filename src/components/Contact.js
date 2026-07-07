import useContactData from "../utils/useContactData"

const Contact =()=>{
    const contactData = useContactData(); // instance of hook is created , this hook instance states are now this component state
    return(
        <div className="main-container flex-1 p-4">
            <h1>Contact US.</h1>
            <h2>{contactData?.bio}</h2>
        </div>
        
    )
}
export default Contact