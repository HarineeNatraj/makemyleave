import React, { Component } from 'react';
import "./topnav.css";
import dp from "../../../Images/dp-icon.png";
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Topnav extends Component {
  state={
    user:{}
  }
  logout=()=>{
    localStorage.setItem('rememberMe', false);
    localStorage.setItem('name',null);
    localStorage.setItem('password',null);
    localStorage.setItem('type',null);
  }
  componentDidMount(){
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const name = rememberMe ? localStorage.getItem('name') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';
    const type = rememberMe ? localStorage.getItem('type') : '';
    const details = rememberMe ? JSON.parse(localStorage.getItem('user_details')) : '';
    console.log(details);
    if(name && password){
      this.setState({
        user:details
    })
    }
    console.log(this.state.user);
  }
  render() {
    // const name=this.state.user.name;
    return (
        <div className="admin-dash-right-header">
        <div style={{flex:0.3}}>
  <input className="admin-dash-search" type="text" placeholder="Search for more tasks"/>
  <i style={{marginLeft: "-30px",
fontSize: "1.2rem",
color: "grey",cursor:"pointer"}} class="fas fa-search"></i>
</div>
<div className="admin-notifi-icon">
<p className="admin-notifi-size">6</p>
<i class="far fa-bell"></i>
</div>
<div style={{flex:0.4,display:"flex",justifyContent:"center"}}>
<img style={{width:"40px",height:"40px"}} src={dp} alt="dp"/>
<h6 className="admin-name">{this.state.user.name}</h6>
<Link to="/login"><i onClick={this.logout}  class="fa fa-sign-out admin-logout"></i></Link>
</div>
<div>

</div>
        </div>
    );
  }
}