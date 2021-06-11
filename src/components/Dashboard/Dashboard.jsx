import React, { Component } from 'react';
import "./dashboard.css";
import LineChart from '../Graph/Graph';
import Topnav from "../topnav/topnav";
import Leftnav from '../leftnav/leftnav';
// import {CircleProgress} from 'react-gradient-progress';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import axios from 'axios';
import loadinggif from "../../Images/1474.gif";



export default class Dashboard extends Component {
    state={
        user:{},
        sgpa:[],
        hrs:[],
        loading:false,
        recent_activities:[]
    }
    componentDidMount(){
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const name = rememberMe ? localStorage.getItem('name') : '';
        const password = rememberMe ? localStorage.getItem('password') : '';
        const type = rememberMe ? localStorage.getItem('type') : '';
        if(name && password){
            this.setState({
                loading:true
            })
            axios.post(`${process.env.REACT_APP_APILINK}/get_user_details`,{user_type:type,user_id:name})
            .then(res=>{
                console.log(res.data);
                this.setState({
                    user:res.data[0]
                })
                this.setState({
                    sgpa:[]
                })
                if(this.state.user.s1_sgpa){
                    // console.log("ds");
                    this.setState(prevState => ({
                        sgpa: [...prevState.sgpa, res.data[0].s1_sgpa]
                      }))
                }
                if(this.state.user.s2_sgpa){
                    this.setState(prevState => ({
                        sgpa: [...prevState.sgpa, res.data[0].s2_sgpa]
                      }))
                }
                if(this.state.user.s3_sgpa){
                    this.setState(prevState => ({
                        sgpa: [...prevState.sgpa, res.data[0].s3_sgpa]
                      }))
                }
                if(this.state.user.s4_sgpa){
                    this.setState(prevState => ({
                        sgpa: [...prevState.sgpa, res.data[0].s4_sgpa]
                      }))
                }
                if(this.state.user.s5_sgpa){
                    this.setState(prevState => ({
                        sgpa: [...prevState.sgpa, res.data[0].s5_sgpa]
                      }))
                }
                if(this.state.user.s6_sgpa){
                    this.setState(prevState => ({
                        sgpa: [...prevState.sgpa, res.data[0].s6_sgpa]
                      }))
                }
                if(this.state.user.s7_sgpa){
                    this.setState(prevState => ({
                        sgpa: [...prevState.sgpa, res.data[0].s7_sgpa]
                      }))
                }
                if(this.state.user.s8_sgpa){
                    this.setState(prevState => ({
                        sgpa: [...prevState.sgpa, res.data[0].s8_sgpa]
                      }))
                }
                console.log(this.state.sgpa);
            })
            axios.post(`${process.env.REACT_APP_APILINK}/sem_wise_leaves`,{s_id:name})
            .then(res=>{
                console.log(res.data);
                res.data.map((person, index) => (
                    this.setState(prevState => ({
                        hrs: [...prevState.hrs, person.no_hrs]
                      }))                ))
                      console.log(this.state.hrs);
                      this.setState({
                        loading:false
                    })
            })
            // axios.post(`${process.env.REACT_APP_APILINK}/recent_activities`,{s_id:name})
            // .then(res=>{
            //     console.log(res.data);
            //     this.setState({
            //         loading:true
            //     })
            //     res.data.map((person, index) => (
                   
            //         this.setState(prevState => ({
            //             recent_activities: [...prevState.recent_activities, person]
            //           }))              
            //           ))
            //           console.log(this.state.recent_activities);
             
            // })
        }
        else{
            this.props.history.push("/login");
        }
    }
render() {
    const p=(this.state.hrs[this.state.hrs.length-1])/35*100;
    const percentage=Math.round(p);
return (
<div className="dashboard">
    <Leftnav />
    <div className="dash-right" style={{padding:"0"}}>
        <Topnav />
    {this.state.loading?<div style={{width:"80%",height:"50%",margin:"10%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <img width="100px" src={loadinggif} alt="Loading-gif"/>
        <h6>Loading...</h6>

    </div>:
    <div>
        <div className="dash-right-content" style={{paddingRight: "28px"}}>
            <div className="dash-graph">
                <LineChart min={5} max={10}  xdata={this.state.sgpa} xaxis={['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6','Sem 7','Sem 8']} color={"#5995fd"} hover={"#3C64AB"} label={"Grade (SGPA)"} />
            </div>
            <div className="dash-graph">
                <LineChart min={0} max={50}  xdata={this.state.hrs} xaxis={['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6','Sem 7','Sem 8']} color={"#e84545"} hover={"#ac0d0d"} label={"No. of Leave"} />
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
                        <h5 style={{display:"inline-block",color:"grey",fontSize:"0.9rem"}}></h5>
                        <p style={{color:"grey",marginLeft:"35px",fontSize:"0.8rem",textAlign:"left"}}></p>
                        <div style={{display:"flex"}}>
                            <div style={{display:"inline-block",width:"10px",height:"10px",backgroundColor:"yellow",borderRadius:"50%",marginBottom:"0",marginRight:"5px", marginLeft: "17px",
    marginTop: "5px"}}></div>
                            <p style={{flex:"0.5",display:"inline-block",textAlign:"left",fontSize: "0.7rem",
    marginTop: "3px"}}></p>
                            <p
                                style={{flex:"0.5",color:"gray",display:"inline-block",textAlign:"right",fontSize:".6rem",marginRight:"5px",marginTop:"5px"}}>
                                </p>
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