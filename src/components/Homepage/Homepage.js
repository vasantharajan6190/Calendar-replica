import React,{useContext, useEffect} from "react"
import {context} from "../../app"
import {useHistory} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Maincalendar from "../MainCalendar/maincalendar"
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
       <Navbar/>
        </div>
        <div className="row">
       <Sidebar/>
        <Maincalendar/>
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