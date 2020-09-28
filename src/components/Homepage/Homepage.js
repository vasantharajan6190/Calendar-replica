import React,{useContext, useEffect} from "react"
import "./Homepage.css"
import {context} from "../../app"
import {useHistory} from 'react-router-dom'
function Homepage(){
    const main = useContext(context)
    const history = useHistory()
    const [login,setlogin] = main.login
    const [logged_user,setlogged_user] = main.logged_user
    // setting loggeduser value
    function set_logged_user_state(){
        var retrievedObject = localStorage.getItem('logged_user_localstorage');
        setlogged_user(JSON.parse(retrievedObject))
    }
    useEffect(()=>{
          set_logged_user_state()
    },[])

    //logout 
    function logout(){
     setlogged_user({})
     setlogin(false)
     localStorage.removeItem('logged_user_localstorage')
     history.push("/")
    }

    return(
        <div>
        {login?
        <div className="col-12">
        <div className="row">
        <div className="col-12" style={{borderBottom:"2px solid black",height:80,backgroundColor:"coral"}}>
        <p className="font-weight-bold text-center" style={{fontSize:20}}>NAVBAR</p>
        </div>
        </div>
        <div className="row">
        <div className="col-3" style={{borderRight:"2px solid black",backgroundColor:"azure",height:550}}>
        <p className="font-weight-bold text-center" style={{fontSize:20}}>SIDEBAR</p>

        </div>
        <div  className="col-8" style={{borderRight:"2px solid black",backgroundColor:"lightgray",height:550}}>
        <p className="font-weight-bold text-center" style={{fontSize:20}}>MAIN CALENDAR TABLE</p>
        </div>
        <div className="col-1" style={{borderLeft:"2px solid black",backgroundColor:"lightgreen",height:550}}>
        <p className="font-weight-bold text-center" style={{fontSize:20}}>EXTRA GOOGLE LINK</p>

        </div>
        </div>
        </div>
        :null}
        </div>
    )
}

export default Homepage