import React, { Component } from 'react';
import Topnav from "../topnav/topnav";
import Leftnav from '../leftnav/leftnav';
import axios from 'axios';
import loadinggif from "../../Images/1474.gif";
import pending from './pending.svg';
import accept from './accept.svg';

export class Recentactivity extends Component {
    state={
        act:[],
        loading:true
    }
    componentDidMount(){
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const name = rememberMe ? localStorage.getItem('name') : '';
        axios.post(`${process.env.REACT_APP_APILINK}/recent_activities`,{user_type:"student",s_id:name})
        .then(res=>{
            res.data.map((person, index) => (
                this.setState(prevState => ({
                    act: [...prevState.act, person]
                  }))                ))
                  this.setState({
                      loading:false
                  })
                  console.log(this.state.act);
        })}
    render() {
        return (
                <div style={{display:"flex"}}>
  <div style={{flex:"0.1"}}>
    <Leftnav />
  </div>
  <div style={{flex:"0.9"}}>
    <Topnav />
    {
    this.state.loading?<div
      style={{width:"80%",height:"50%",margin:"10%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <img width="100px" src={loadinggif} alt="Loading-gif" />
      <h6>Loading...</h6>

    </div>: <div>
    <h1
                style={{textAlign:"center",fontWeight:"300",fontSize:"1.5rem",marginTop:"15px",textShadow: "2px 2px 5px #5995fd"}}>
                Recent Activities </h1>
    {this.state.act.map((ob, index) => (
  <div
                            style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",position:"relative",padding:"20px",margin:"20px",backgroundColor:"white",height:"250px",borderRadius:"9px",display:"flex"}}>
                            <div style={{flex:"0.3",display:"flex",alignItems:"center",flexDirection:"column"}}>
                                <h4 style={{marginTop:"10px",fontWeight:"300",marginBottom:"60px",textShadow:" 0 0 3px #5995fd"}}>From : {ob.from.slice(0,10)}</h4>
                                <h4 style={{marginTop:"65px",fontWeight:"300",textShadow:" 0 0 3px #5995fd"}}>To : {ob.to.slice(0,10)}</h4>
                            </div>
                            <div style={{flex:"0.4",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                                <h4 style={{marginTop:"10px",fontWeight:"300",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",color:"#5995fd"}}>Reason for the Leave </h4>
                                <h4 >{ob.reason}</h4>
                            </div>
                            <div style={{flex:"0.3",display:"flex",flexDirection:"column"}}>
                                <h4 style={{marginTop:"10px",fontWeight:"300",textShadow: "2px 2px 5px red"}}>status : {ob.response}</h4>
                                {
                                    ob.response==="pending"?                                <img src={pending} style={{height:"150px",width:"150px",position:"absolute",bottom:"-8px",right:"-1px"}} alt="" />:
                                    <img src={accept} style={{height:"150px",width:"150px",position:"absolute",bottom:"-8px",right:"-1px"}} alt="" />


                                }
                            </div>
                            {/* <div onClick={()=>{this.handleDelete(ob.s_id)}} style={{flex:"0.2",display:"flex",justifyContent:"center"}}><button
                                    style={{height:"30px",marginTop:"10px",outline:"none",border:"none",width:"100px",color:"white",backgroundColor:"#f14668",borderRadius:"9px"}}
                                    type="">Remove</button></div> */}
            
                        </div>   
                        
                        
                        ))}
        </div>
           
    }
     </div>
     </div>
)
}
}
export default Recentactivity
