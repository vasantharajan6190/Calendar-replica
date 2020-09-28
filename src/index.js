 import React from 'react';
 import ReactDOM from 'react-dom';
 import App,{Contextvariables} from "./app"
 import {BrowserRouter} from "react-router-dom"
 ReactDOM.render(
   <Contextvariables>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
   </Contextvariables>,
    document.getElementById('root')
    );