import React,{useState,useContext} from "react"
import {context} from "../../app"
import "./Navbar.css"
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import {Tooltip} from "@material-ui/core"
function Navbar(){
    const main = useContext(context)
    const history = useHistory()
    const [login,setlogin] = main.login
    const [logged_user,setlogged_user] = main.logged_user
    var today = new Date()
var date =today.getDate()
    return(
        <div className="col-12 d-flex justify-content-between" style={{borderBottom:"1px solid lightgray",padding: "0px 29px"}}>
        <div className="d-flex">
        <div className="d-flex justify-content-between">
        <Tooltip title="Main Menu">
        <i onMouseEnter={()=>console.log(moment().format('MMMM YYYY'))} className="fa fa-bars" style={{fontSize:22,marginTop:7,padding:"15px 16px"}} aria-hidden="true"></i>
        </Tooltip>
        <div className="d-flex">
        <img style={{width:50,height:50,marginLeft:15,marginTop:5}} src={`http://www.gstatic.com/calendar/images/dynamiclogo/2x/cal_${date}_v2.png`}/>
         <p className="calendarfont">Calendar</p>
        </div>
        </div>
        <div className="d-flex justify-content-between">
        <Tooltip title={`${moment().format('dddd')},${moment().format('MMMM')} ${date}`}>
        <p className="todaytext">Today</p>
        </Tooltip>
        <div className="mt-1">
        <Tooltip title="Previous month">
        <i className="fa faarrow fa-chevron-left text-secondary ml-3 px-3 py-3" aria-hidden="true"></i>
        </Tooltip>
        <Tooltip title="Next month">
        <i className="fa faarrow fa-chevron-right text-secondary ml-2 px-3 py-3" aria-hidden="true"></i>
        </Tooltip>
        </div>
        <p className="month-year">{moment().format('MMMM YYYY')}</p>
        </div>
        </div>
        <div className="d-flex justify-content-between mt-1">
        <Tooltip title="Search">
        <i className="mr-1 pt-3  px-3 fa fa-search" style={{fontSize:22,marginTop:2,color:"gray"}} aria-hidden="true"></i>
        </Tooltip>
        <Tooltip title="Question">
        <i className="mr-1 pt-3  px-3 fa fa-question-circle-o" style={{fontSize:28,color:"gray"}} aria-hidden="true"></i>
        </Tooltip> 
        <Tooltip title="Settings">
        <i className="mr-2 pt-3 px-3 fa fa-cog" style={{fontSize:28,color:"gray"}} aria-hidden="true"></i>
        </Tooltip>
        <p className="mr-5 mt-2 month_text">Month<i className="fa fa-caret-down ml-1" aria-hidden="true"></i>
        </p>
        <Tooltip title="Google Apps">
        <i className="mr-2 pt-3 fa fa-th px-3"  style={{fontSize:28,color:"gray"}} aria-hidden="true"></i>
        </Tooltip>
        <img className="user_photo" style={{width:40,height:40,borderRadius:50,marginTop:8}} src={logged_user.imageUrl} />
        </div>
        </div>
    )
}

export default Navbar