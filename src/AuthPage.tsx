import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export const userAuth = {
  logged:false
}

export interface Props{
    component:any,
    logged?:boolean

}

interface State{
    foo:number;
}

function getToken(){
    return window.localStorage.getItem("token");
}


class AuthPage extends Component<Props,State> {

   constructor(props:Props){
        super(props);
   }

   render(){
     const {component:Component,logged} = this.props
     
     return (
       getToken()?
       <Component /> : 
       <Redirect to="/login" />
     )
   }
}


export default AuthPage