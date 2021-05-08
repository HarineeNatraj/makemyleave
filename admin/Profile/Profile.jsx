import React, { Component } from 'react';
import Topnav from "../admin-topnav/topnav";
import Leftnav from '../admin-leftnav/leftnav';
import pro from "../../../Images/blank-image.svg";
import axios from 'axios';
import LineChart from '../../Graph/Graph';
import {CircleProgress} from 'react-gradient-progress';
import loadinggif from "../../../Images/1474.gif";
import l1 from "../../../Images/l1.png"


class adminProfile extends Component {

state={
hrs:[],
total_hrs:0,
loading:false,
user:{},
type:null,
change:null

}
handleChange=(e)=>{
  this.setState({
    change:e.target.value
  })
}
handleSubmit=()=>{
console.log(this.state.type,this.state.change);
const t=this.state.user
t[this.state.type]=this.state.change
this.setState({
  user:t
})
// this.state.user[this.state.type]=this.state.change;
console.log(this.state.user);
axios.post(`${process.env.REACT_APP_APILINK}/update_details`,this.state.user)
.then(res=>{
  console.log(res.data);
  if(res.data==="Updated"){
    window.location.reload(false)
  }
})

}
handleClick=(type)=>{
  this.setState({
    type:type
  })
console.log(type);
}

componentDidMount(){
const rememberMe = localStorage.getItem('rememberMe') === 'true';
const name = rememberMe ? localStorage.getItem('name') : '';
const password = rememberMe ? localStorage.getItem('password') : '';
const type = rememberMe ? localStorage.getItem('type') : '';
if(name && password){
axios.post(`${process.env.REACT_APP_APILINK}/get_user_details`,{user_type:type,user_id:name})
.then(res=>{
this.setState({
user:res.data[0]
})
console.log(this.state.user );
})}
axios.post(`${process.env.REACT_APP_APILINK}/sem_wise_leaves`,{s_id:name})
.then(res=>{
this.setState({
loading:true
})
console.log(this.state.loading);
res.data.map((person, index) => (
this.setState(prevState => ({
hrs: [...prevState.hrs, person.no_hrs],
total_hrs:prevState.total_hrs+person.no_hrs
}))
))

})
}
render() {
return (
<div style={{display:"flex"}}>
  <div style={{flex:"0.1"}}>
    <Leftnav />
  </div>
  <div style={{flex:"0.9"}}>
    <Topnav />
    {
    !this.state.loading?<div
      style={{width:"80%",height:"50%",margin:"10%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <img width="100px" src={loadinggif} alt="Loading-gif" />
      <h6>Loading...</h6>

    </div>: <div>
      <div style={{width:"100%",height:"150px",backgroundColor:"#555a55"}}>
      </div>
      <div
        style={{height:"100%",backgroundColor:"white",borderRadius:"9px",marginTop:"-5%",marginLeft:"20px",marginRight:"20px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",position:"relative"}}>
        <p style={{position:"absolute",left:"30px",top:"10px",color:"grey"}}><i
            style={{marginRight:"10px",color:"grey"}} class="far fa-id-badge"></i>{this.state.user.user_id}</p>
        <p style={{position:"absolute",right:"70px",top:"10px"}}><i style={{marginRight:"5px"}}
            class="fas fa-phone-square-alt"></i>{this.state.user.phoneno}<i onClick={()=>{
              this.handleClick("phoneno")
            }}
            style={{textShadow: "none",marginLeft:"5px",marginBottom:"5px",color:"grey",cursor:"pointer",fontSize:"10px"}}
            class="far fa-edit" data-toggle="modal" data-target="#exampleModal"></i></p>
        <div
          style={{width:"150px",position:"relative",marginLeft:"45%",height:"150px",borderRadius:"50%",marginTop:"-7%"}}>
          <img src={pro} style={{borderRadius:"50%",marginTop:"-50px",width:"140px",height:"140px"}} alt="" />
          <i style={{cursor:"pointer",position:"absolute",right:"10px",bottom:"59px"}} class="fas fa-2x fa-camera"></i>
        </div>
        <img style={{width: "50px",
    marginLeft: "49%",
    marginBottom: "38px"}} src={l1} alt="" />
        <h3
          style={{fontSize:"1.5rem",fontWeight:"bold",textAlign:"center",marginTop:"-10px",marginBottom:"25px",textShadow: "2px 2px 5px #f14668",marginLeft:"60px"}}>
          {this.state.user.name}<i onClick={()=>{
            this.handleClick("name")
          }}
            style={{textShadow: "none",marginLeft:"10px",color:"grey",cursor:"pointer",fontSize: "15px"}}
            data-toggle="modal" data-target="#exampleModal" class="far fa-edit"></i></h3>
        <h6
          style={{fontSize:"1.2rem",fontWeight:"400",textAlign:"center",marginTop:"-10px",marginLeft:"35px",color:"grey",marginBottom:"15px"}}>
          Faculty</h6>
        <h6 style={{textAlign:"center",color:"grey",cursor:"pointer",marginLeft:"65px",marginBottom:"15px"}}>
          {this.state.user.email}<i onClick={()=>{
            this.handleClick("email")
          }} style={{textShadow: "none",marginLeft:"5px",color:"grey"}} class="far fa-edit" data-toggle="modal" data-target="#exampleModal"></i>
        </h6>
        <p style={{margin: "0 120px",
    textAlign: "center",
    fontSize: "1rem",
    marginLeft:"231px",
    color: "grey",
    lineHeight: "2.0"}}>When one door closes,another opens; but we oftern look so long and regretfully upon the closed
          door that we do not see the one which has opened for us</p>
        <button onClick={()=>{
            this.handleClick("password")
          }}
          style={{outline:"none",border:"none",backgroundColor:"#f14668",color:"white",marginLeft:"45%",marginTop:"20px",width:"150px",height:"30px",borderRadius:"49px",marginBottom:"20px" }}data-toggle="modal" data-target="#exampleModal">Change
          Password</button>
      </div>
      <div style={{display:"flex"}}>
        <div
          style={{borderRadius:"9px",flex:"0.7",padding:"15px",backgroundColor:"white ",margin: "22px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <LineChart xdata={this.state.hrs} color={"#e84545"} hover={"#ac0d0d"} label={"No. of Leave"} />
        </div>
        <div
          style={{borderRadius:"9px",flex:"0.3",flexDirection:"column",display:"flex",justifyContent:"center",backgroundColor:"white ",margin: "22px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <h3 style={{margin:"20px",marginTop:"0px",paddingTop:"20px",textShadow: "0 0 3px #5995fd",marginBottom:"0"}}>
            {this.state.total_hrs} activites</h3>
          <p style={{fontSize: "0.7rem",marginLeft:"20px",
    color: "grey"}}>overall progress</p>
          <CircleProgress percentage={this.state.total_hrs} strokeWidth={10} strokeLinecap={"butt"} fontSize={35}
            fontColor={"grey"} primaryColor={["#289672","#9ede73","#d44000","#e2703a","#8c0000","#e40017"]}
            secondaryColor={"#eeebdd"} />
          <div style={{display:"flex"}}>
            <div style={{flex:"0.5",display:"flex"}}>
              <div style={{flex:"0.3",display:"flex",justifyContent:"flex-end",marginRight:"5px",marginTop:"5px"}}>
                <div style={{backgroundColor:"#289672",width:"10px",height:"10px",borderRadius:"50%"}}>
                </div>
              </div>
              <h6 style={{display:"inline-block",flex:"0.5",color:"grey"}}>Done</h6>
            </div>
            <div style={{display:"flex",flex:"0.5"}}>
              <div style={{flex:"0.3",display:"flex",justifyContent:"flex-end",marginRight:"5px",marginTop:"5px"}}>
                <div style={{backgroundColor:"#eeebdd",width:"10px",height:"10px",borderRadius:"50%"}}>
                </div>
              </div>
              <h6 style={{display:"inline-block",flex:"0.5",color:"grey"}}>Remaining</h6>
            </div>
          </div>

        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Your Profile </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style={{display:"flex",justifyContent:"center",alignItems: 'center'}}>
        {
          this.state.type==="phoneno"?<div>
            <input onChange={this.handleChange} style={{height:"50px",width:"227px",paddingLeft:"17px"}}  type="number" placeholder="Enter your Phone number" />
          </div>:   <div>
          <input onChange={this.handleChange} style={{height:"50px",paddingLeft:"17px"}} type="text" placeholder={"Enter your "+this.state.type} />
          </div>    
        }
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
    }

  </div>
</div>
);
}
}

export default adminProfile;