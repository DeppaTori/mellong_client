import React,{Component} from 'react';

class Contact extends Component{
    componentDidMount(){
        window.localStorage.clear();
    }
    render(){
        return <h1>Contact</h1>
    }
}

export default Contact