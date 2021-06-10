import React, { Component } from 'react'
import "./Loader.css";
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png';
import axios from 'axios';

export class Loader extends Component {
    state={
        timer:0
    }
    componentDidMount = () => {
        const rememberMe=localStorage.getItem('rememberMe')==='True';
        console.log(rememberMe);
        if(rememberMe){
            const user=localStorage.getItem('user');
            axios.post(`${process.env.REACT_APP_APILINK}`, { user })
            .then(res=>{
                if(res.data.flag){
                    if(res.data.type==="student"){
                        this.props.history.push("/student_home");
                    }
                    else{
                        this.props.history.push("/admin_home");
                    
                    }
                }
            })
        }
      this.interval=setInterval(() => {
          if(this.state.timer>3){
clearInterval(this.interval)
this.handlechange();
          }
          else{
            this.setState({
                timer:this.state.timer+1
            })
          }
      }, 1000);
    };

    handlechange(){
        const loader=document.querySelector(".loader-19");
        loader.style.opacity=0;
        loader.style.display="none";
        setTimeout(() => {
            this.logochange();
        }, 1000);
       
        
    }
    logochange(){
        const logo=document.querySelector(".logo-img");
        logo.style.top="30%";
        setTimeout(() => {
            this.textchange();
        }, 1500);
       
    }

    textchange(){
        const text=document.querySelector(".loader-text");
        text.style.display="flex";
    }
render() {
return (
<div>
    <div className="loader-bg">
    <section className="loading">
    <span className="loader-19"></span>
    <img className="logo-img" src={Logo} alt="logo-loader" />
    <div className="loader-text">
        <h3 style={{fontWeight:100,paddingBottom:"10px"}}>Dedicated software for managing leave and attendence</h3>
        <Link to="/login"><button className="start-button">Let's Get Started</button></Link>
    </div>
  </section>
    </div>
</div>
)
}
}

export default Loader