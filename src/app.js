import React,{createContext, useState,useContext, useEffect} from 'react'
import {Switch,Route, useHistory} from 'react-router-dom'
import Homepage from "./components/Homepage/Homepage"
import Index_page from "./components/Indexpage/Index"
export const context = createContext()
export const Contextvariables = (props)=>{
    const[login,setlogin] = useState(false)
    const [logged_user,setlogged_user] = useState({})
    return(
        <context.Provider value={{
            login:[login,setlogin],
            logged_user :[logged_user,setlogged_user]
        }}>
        {props.children}
        </context.Provider>
    )
}

function App(){
    const main = useContext(context)
    const history = useHistory()
    const [login,setlogin] = main.login
    const [logged_user,setlogged_user] = main.logged_user
    useEffect(()=>{
        if(!localStorage.logged_user_localstorage){
            history.push("/")
        }
        else{
         setlogin(true)
         var retrievedObject = localStorage.getItem('logged_user_localstorage');
         setlogged_user(JSON.parse(retrievedObject))
        }
    },[])
    return(
        <React.Fragment>
        <Switch>
        <Route path="/homepage" exact component={Homepage}/>
        <Route path="/" exact component={Index_page}/>
        </Switch>
        </React.Fragment>
    )
}

export default App