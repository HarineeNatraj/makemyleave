import React, { Component } from 'react';
import "./topnav.css";
import dp from "../../Images/dp-icon.png";
import axios from 'axios';

export default class Topnav extends Component {
  state={
    user:{}
  }
  componentDidMount(){
      const rememberMe = localStorage.getItem('rememberMe') === 'true';
      const name = rememberMe ? localStorage.getItem('name') : '';
      const password = rememberMe ? localStorage.getItem('password') : '';
      const type = rememberMe ? localStorage.getItem('type') : '';
      if(name && password){
          axios.post(`${process.env.REACT_APP_APILINK}/get_user_details`,{user_type:type,user_id:name})
          .then(res=>{
              // console.log(res.data);
              this.setState({
                  user:res.data[0]
              })
              console.log(this.state.user);
              localStorage.setItem('user_details',this.state.user);
          })
      }
      else{
          this.props.history.push("/login");
      }
  }
  render() {
    // const name=this.state.user.name;
    return (
        <div className="dash-right-header">
        <div style={{flex:0.3}}>
  <input className="dash-search" type="text" placeholder="Search for more tasks"/>
  <i style={{marginLeft: "-30px",
fontSize: "1.2rem",
color: "grey",cursor:"pointer"}} class="fas fa-search"></i>
</div>
<div className="notifi-icon">
<p className="notifi-size">6</p>
<i class="far fa-bell"></i>
</div>
<div style={{flex:0.4,display:"flex",justifyContent:"center"}}>
<img style={{width:"40px",height:"40px"}} src={dp} alt="dp"/>
<h6 className="name">{this.state.user.name}</h6>
<i style={{    marginTop: "15px",
fontSize: "0.8rem",
marginLeft: "10px",
color: "white",cursor:"pointer"
}} class="fas fa-chevron-down"></i>
</div>
<div>

</div>
        </div>
    );
  }
}