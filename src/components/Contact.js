// import useContactData from "../utils/useContactData"

const Contact =()=>{
    // const contactData = useContactData(); // instance of hook is created , this hook instance states are now this component state
    return(
        <div className="main-container flex-1 p-4">
            <h1 className="font-bold p-5 text-xl">Contact Us.</h1>
            {/* <h2>{contactData?.bio}</h2> */}
            <div>
                <input className="border-2 border-gray-400 m-5 p-2" type="text" placeholder="Your Name..."/>
                <input className="border-2 border-gray-400 m-5 p-2" type="text" placeholder="Type your Message Here..."/>
                <button className="bg-green-100 p-2 m-5 shadow-2xl w-20 cursor-pointer">Submit</button>
            </div>
        </div>
        
    )
}
export default Contact