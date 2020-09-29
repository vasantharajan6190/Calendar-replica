import React,{useState,useContext} from "react"
import {context} from "../../app"
import {useHistory} from 'react-router-dom'
function Maincalendar(){
    const main = useContext(context)
    const history = useHistory()
    const [login,setlogin] = main.login
    const [logged_user,setlogged_user] = main.logged_user
    return(
        <div  className="col-8" style={{borderRight:"2px solid black",backgroundColor:"lightgray",height:550}}>
        <p className="font-weight-bold text-center" style={{fontSize:20}}>MAIN CALENDAR TABLE</p>
        </div>
    )
}

export default Maincalendar