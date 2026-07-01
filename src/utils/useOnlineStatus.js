import {useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const[onlineStatus, setStatus] = useState(true);
    useEffect(()=>{            // whenever net on off chng the state variable as this state variable is a part of compoent who alled this hook that componet will also rerendered along with this 
        window.addEventListener("online",()=>{
            setStatus(true)
        })
        window.addEventListener("offline",()=>{
            setStatus(false)
        })
    },[])
    return onlineStatus;
}
export default useOnlineStatus