import React, { useContext, useEffect, useState } from "react"
import {useHistory} from 'react-router-dom'
import {context} from "../../app"
import {GoogleLogin} from 'react-google-login';
function Index_page(){
    const main = useContext(context)
    const history = useHistory()
    const [login,setlogin] = main.login
    const [calendarimage,setcalendarimage] = useState(false)
    const [logged_user,setlogged_user] = main.logged_user
  
    //For checking the user already logged?
    let user_details = {}
    useEffect(()=>{
      if(localStorage.logged_user_localstorage){
          history.push("/homepage")
          var retrievedObject = localStorage.getItem('logged_user_localstorage');
        setlogged_user(JSON.parse(retrievedObject))
      }
    },[])
    setTimeout(() => {
        setcalendarimage(true) 
    },5500);
    //Google response once loggedin
    const responseGoogle = (response) => {
        if(response.profileObj){
        setlogged_user(response.profileObj)
        setlogin(true)
        localStorage.setItem('logged_user_localstorage', JSON.stringify(response.profileObj));
        history.push("/homepage")
    }
        else{
            setlogged_user({})
            setlogin(false)
        }
      }
    return(
        <div>
        {
            calendarimage?
            <div>
            <div className="d-flex justify-content-center" style={{marginTop:127}}>
            <img style={{width:500,height:300}} src="https://i1.wp.com/ansonalex.com/wp-content/uploads/2011/01/google-calendar-logo.png?resize=650%2C432&ssl=1" />
            </div>
            <div className="d-flex justify-content-center">
            <GoogleLogin
            clientId="362361799034-07rfibr6nmorr9r15d8bo2ekfm6h6tco.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          </div>
            </div>
            :
            <div className="d-flex justify-content-center" style={{marginTop:150}}>
            <img style={{width:500,height:300}} src="https://cdn.dribbble.com/users/4874/screenshots/1792443/timely_dribbble.gif" />
            </div>
        }
        </div>
    )
}

export default Index_page