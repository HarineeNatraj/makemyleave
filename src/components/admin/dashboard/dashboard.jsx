import React, { Component } from 'react';
import "./dashboard.css";
import LineChart from '../../Graph/Graph';
import Topnav from "../admin-topnav/topnav";
import Leftnav from '../admin-leftnav/leftnav';
// import {CircleProgress} from 'react-gradient-progress';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import axios from 'axios';
import loadinggif from "../../../Images/1474.gif";



export default class Admin extends Component {
    state={
        user:{},
        sgpa:[],
        hrs:[],
        bargraph:[],
        loading:false,
        recent_activities:[],
        avgsgpa:[]
    }
    componentDidMount(){
        this.setState({
            bargraph:[]
        })
        this.setState({
            avgsgpa:[]
        })
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
                axios.post(`${process.env.REACT_APP_APILINK}/graph1`,{a_id:name})
        .then(res=>{
            console.log(res.data[0]);
            this.setState({
                loading:true
            })
            if(res.data[0].s1){
                this.setState(prevState => ({
                    avgsgpa: [...prevState.avgsgpa, res.data[0].s1]
                  }))
            }
            if(res.data[0].s2){
                this.setState(prevState => ({
                    avgsgpa: [...prevState.avgsgpa, res.data[0].s2]
                  }))
            }
            if(res.data[0].s3){
                this.setState(prevState => ({
                    avgsgpa: [...prevState.avgsgpa, res.data[0].s3]
                  }))
            }
            if(res.data[0].s4){
                this.setState(prevState => ({
                    avgsgpa: [...prevState.avgsgpa, res.data[0].s4]
                  }))
            }
            if(res.data[0].s5){
                this.setState(prevState => ({
                    avgsgpa: [...prevState.avgsgpa, res.data[0].s5]
                  }))
            }
            if(res.data[0].s6){
                this.setState(prevState => ({
                    avgsgpa: [...prevState.avgsgpa, res.data[0].s6]
                  }))
            }
            if(res.data[0].s7){
                this.setState(prevState => ({
                    avgsgpa: [...prevState.avgsgpa, res.data[0].s7]
                  }))
            }
            if(res.data[0].s8){
                this.setState(prevState => ({
                    avgsgpa: [...prevState.avgsgpa, res.data[0].s8]
                  }))
            }
            console.log(this.state.avgsgpa);
        })
        axios.post(`${process.env.REACT_APP_APILINK}/graph2od`,{a_id:name})
        .then(res=>{
            this.setState(prevState=>({
                bargraph: [...prevState.bargraph, res.data[0].count_od]
            }))
            console.log(this.state.bargraph);
        })
        axios.post(`${process.env.REACT_APP_APILINK}/graph2ml`,{a_id:name})
        .then(res=>{
            this.setState(prevState=>({
                bargraph: [...prevState.bargraph, res.data[0].count_ml]
            }))
            console.log(this.state.bargraph);
        })
        axios.post(`${process.env.REACT_APP_APILINK}/graph2ordinary`,{a_id:name})
        .then(res=>{
            this.setState(prevState=>({
                bargraph: [...prevState.bargraph, res.data[0].count_ordinary]
            }))
            console.log(this.state.bargraph);
        })
        })
    }
}
render() {
    console.log(this.state.loading);
    const p=(this.state.hrs[this.state.hrs.length-1])/35*100;
    const percentage=Math.round(p);
return (
<div className="dashboard">
    <Leftnav />
    <div className="dash-right" style={{padding:"0"}}>
        <Topnav />
    {!this.state.loading?<div style={{width:"80%",height:"50%",margin:"10%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <img width="100px" src={loadinggif} alt="Loading-gif"/>
        <h6>Loading...</h6>

    </div>:
    <div>
        <div className="dash-right-content" style={{paddingRight: "28px"}}>
            <div className="dash-graph">
                <LineChart  xdata={this.state.bargraph} min={0} xaxis={['OD','ML','Ordinary']} color={"#5995fd"} hover={"#3C64AB"} label={"No. of leaves"} />
            </div>
            <div className="dash-graph">
                <LineChart  xdata={this.state.avgsgpa} min={5} xaxis={['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6','Sem 7','Sem 8']} color={"#595b83"} hover={"#3C64AB"} label={"Avg SGPA"} />
            </div>
        </div>
        <div className="activity">
            <div className="my-activity">
                <div className="recent-activity">
                    <h4 style={{fontWeight:"200",padding:"20px",textShadow: "0 0 3px #5995fd"}}>New Activity</h4>
                    <div className="activity-list">
                        <div
                            style={{display:"inline-block",width:"10px",height:"10px",backgroundColor:"hotpink",margin:"20px",borderRadius:"50%",marginBottom:"0",marginRight:"5px"}}>
                        </div>
                        <h5 style={{display:"inline-block",color:"grey",fontSize:"0.9rem"}}>Medical Leave</h5>
                        <p style={{color:"grey",marginLeft:"35px",fontSize:"0.8rem",textAlign:"left"}}>To have an
                            appointment for eye-testing</p>
                        <div style={{display:"flex"}}>
                            <div style={{display:"inline-block",width:"10px",height:"10px",backgroundColor:"yellow",borderRadius:"50%",marginBottom:"0",marginRight:"5px", marginLeft: "17px",
    marginTop: "5px"}}></div>
                            <p style={{flex:"0.5",display:"inline-block",textAlign:"left",fontSize: "0.7rem",
    marginTop: "3px"}}>Pending</p>
                            <p
                                style={{flex:"0.5",color:"gray",display:"inline-block",textAlign:"right",fontSize:".6rem",marginRight:"5px",marginTop:"5px"}}>
                                3 days ago</p>
                        </div>
                    </div>
                    <div className="activity-list">
                        <div
                            style={{display:"inline-block",width:"10px",height:"10px",backgroundColor:"#046582",margin:"20px",borderRadius:"50%",marginBottom:"0",marginRight:"5px"}}>
                        </div>
                        <h5 style={{display:"inline-block",color:"grey",fontSize:"0.9rem"}}>Medical Leave</h5>
                        <p style={{color:"grey",marginLeft:"35px",fontSize:"0.8rem",textAlign:"left"}}>To have an
                            appointment for eye-testing</p>
                        <div style={{display:"flex"}}>
                            <div style={{display:"inline-block",width:"10px",height:"10px",backgroundColor:"green",borderRadius:"50%",marginBottom:"0",marginRight:"5px", marginLeft: "17px",
    marginTop: "5px"}}></div>
                            <p style={{flex:"0.5",display:"inline-block",textAlign:"left",fontSize: "0.7rem",
    marginTop: "3px"}}>Approved</p>
                            <p
                                style={{flex:"0.5",color:"gray",display:"inline-block",textAlign:"right",fontSize:".6rem",marginRight:"5px",marginTop:"5px"}}>
                                8 days ago</p>
                        </div>
                    </div>
                    <h6 className="view-all">View All</h6>
                </div>
                <div className="total-activity">
                    <div className="count-div">
                        <h5
                            style={{margin:"20px",marginTop:"0px",paddingTop:"20px",textShadow: "0 0 3px #5995fd",marginBottom:"0"}}>
                            {this.state.hrs[this.state.hrs.length-1]} Activities</h5>
                        <p style={{fontSize: "0.7rem",marginLeft:"20px",
    color: "grey"}}>On this semester</p>
                        {/* <CircleProgress percentage={percentage} strokeWidth={10} strokeLinecap={"butt"} fontSize={35}
                            fontColor={"grey"}
                            primaryColor={["#289672","#9ede73","#d44000","#e2703a","#8c0000","#e40017"]}
                            secondaryColor={"#eeebdd"} /> */}
                        <div style={{display:"flex"}}>
                            <div style={{flex:"0.5",display:"flex"}}>
                                <div
                                    style={{flex:"0.3",display:"flex",justifyContent:"flex-end",marginRight:"5px",marginTop:"5px"}}>
                                    <div
                                        style={{backgroundColor:"#289672",width:"10px",height:"10px",borderRadius:"50%"}}>
                                    </div>
                                </div>
                                <h6 style={{display:"inline-block",flex:"0.5",color:"grey"}}>Done</h6>
                            </div>
                            <div style={{display:"flex",flex:"0.5"}}>
                                <div
                                    style={{flex:"0.3",display:"flex",justifyContent:"flex-end",marginRight:"5px",marginTop:"5px"}}>
                                    <div
                                        style={{backgroundColor:"#eeebdd",width:"10px",height:"10px",borderRadius:"50%"}}>
                                    </div>
                                </div>
                                <h6 style={{display:"inline-block",flex:"0.5",color:"grey"}}>Remaining</h6>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div className="upcoming-task">
            <CalendarComponent 
    isMultiSelection={true}></CalendarComponent>            </div>
        </div>
 
    </div>
    
    }
        </div>
</div>
)
}
}