import { useEffect, useState } from "react"

const useContactData =()=>{
    const [data,setData]=useState(null);
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const data = await fetch('https://api.github.com/users/anjalirana99')
        const json = await data.json();
        setData(json)
    }
    return data
}
export default useContactData