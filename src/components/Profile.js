import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:{
                name:"default",
                location:"default"
            }
        }
        this.timer = setInterval(()=>{
            console.log("time runnig")
        },10000)
    }
    async componentDidMount(){
    //     console.log("did mount " + this.props.name )
        const data = await fetch('https://api.github.com/users/anjalirana99')
        const json = await data.json();
        this.setState({
            user:json
        })
    }
    // componentDidUpdate(){
    //     console.log("did update "  + this.props.name)
    
    // }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        const {name,bio,avatar_url} = this.state.user
        return(
            <div className="user-profile">
                <img src={avatar_url}/>
                <h2>{name}</h2>
                <h2>{bio}</h2>
                
            </div>
        )
    }
}

export default Profile