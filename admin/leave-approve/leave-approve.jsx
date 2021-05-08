import React, { Component } from 'react';
import Topnav from "../admin-topnav/topnav";
import Leftnav from '../admin-leftnav/leftnav';
import axios from 'axios';


class LeaveApprove extends Component {
state={
mlleave:[],
odleave:[],
ordleave:[]
}

accept=(id,type)=>{
    axios.post(`${process.env.REACT_APP_APILINK}/approve_leave`,{s_id:id,type:type,response:"accepted"})
    .then(res=>{
this.componentDidMount();
    })

}
reject=(id,type)=>{
    axios.post(`${process.env.REACT_APP_APILINK}/approve_leave`,{s_id:id,type:type,response:"rejected"})
    .then(res=>{
        this.componentDidMount();

    })
}
pending=(id,type)=>{
    axios.post(`${process.env.REACT_APP_APILINK}/approve_leave`,{s_id:id,type:type,response:"pending"})
    .then(res=>{
        this.componentDidMount();

    })
}

componentDidMount(){
    this.setState({
        mlleave:[],
odleave:[],
ordleave:[]
    })
const rememberMe = localStorage.getItem('rememberMe') === 'true';
const name = rememberMe ? localStorage.getItem('name') : '';
axios.post(`${process.env.REACT_APP_APILINK}/display_leave`,{user_type:"admin",type:"ML",a_id:name,response:"pending"})
.then(res=>{
console.log(res.data);
res.data.map((ob, index) => {

this.setState(prevState => ({
mlleave: [...prevState.mlleave, ob]
}))
})



})
axios.post(`${process.env.REACT_APP_APILINK}/display_leave`,{user_type:"admin",type:"OD",a_id:name,response:"pending"})
.then(res=>{
res.data.map((ob, index) => {
this.setState(prevState => ({
odleave: [...prevState.odleave, ob]
}))
})
console.log(this.state.leave);


})
axios.post(`${process.env.REACT_APP_APILINK}/display_leave`,{user_type:"admin",type:"Ordinary",a_id:name,response:"pending"})
.then(res=>{
res.data.map((ob, index) => {
this.setState(prevState => ({
ordleave: [...prevState.ordleave, ob]
}))
})
})
}

render() {
return (
<div style={{display:"flex",backgroundColor:"#eeeeee"}}>
    <div style={{flex:"0.1"}}>
        <Leftnav />
    </div>
    <div style={{flex:"0.9"}}>
        <Topnav />
        {
        this.state.mlleave.length>0 || this.state.odleave.length>0 || this.state.ordleave.length>0?<div>
            <h1
                style={{textAlign:"center",fontWeight:"300",fontSize:"1.5rem",marginTop:"15px",textShadow: "2px 2px 5px #f14668"}}>
                Leave Applicaiton</h1>
            {this.state.mlleave.map((ob, index) => (
            <div
                style={{height:"350px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"19px",margin:"30px",backgroundColor:"white"}}>
                <h5
                    style={{textAlign:"center",marginTop:"10px",fontWeight:"300",fontSize:"1.5rem",textShadow: "2px 2px 4px #000000"}}>
                    Medical Leave</h5>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
                    <div style={{display:"flex"}}>
                        <h6>Student Id : </h6>
                        <h6 style={{fontWeight:"300",textShadow: "0 0 3px #FF0000"}}>{ob.s_id}</h6>
                    </div>
                </div>
                <div style={{display:"flex",marginTop:"15px"}}>
                    <div style={{flex:0.5,display:"flex",justifyContent:"center"}}>
                        <h6>From : </h6>
                        <h6 style={{fontWeight:"300",textShadow: "0 0 3px #FF0000"}}>{ob.from_date}</h6>
                    </div>
                    <div style={{flex:"0.5",display:"flex",justifyContent:"center"}}>
                        <h6>To : </h6>
                        <h6 style={{fontWeight:"300",textShadow: "0 0 3px #FF0000"}}>{ob.to_date}</h6>
                    </div>
                </div>
                <h6
                    style={{textAlign:"center",marginTop:"20px",fontSize:"25px",fontWeight:"400",textDecoration:"underline",padding:"3px"}}>
                    Reason </h6>
                <p style={{textAlign:"center"}}>{ob.description}</p>
                <div style={{display:"flex",margin: "30px",
marginLeft: "140px"}}>
                   <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                        this.accept(ob.s_id,"ml")
                    }}
                            style={{flex:"0.3",height:"30px",width:"150px",color:"white",outline:"none",border:"none",borderRadius:"49px",backgroundColor:"#289672"}}>Accept</button>
                    </div>
                    <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                        this.reject(ob.s_id,"ml")
                    }}
                            style={{flex:"0.3",height:"30px",width:"150px",color:"white",outline:"none",border:"none",borderRadius:"49px",backgroundColor:"#be0000"}}>Reject</button>
                    </div>
                    <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                        this.pennding(ob.s_id,"ml")
                    }}
                            style={{flex:"0.3",height:"30px",width:"150px",color:"white",outline:"none",border:"none",borderRadius:"49px",backgroundColor:"#ffbe0f"}}>Accept</button>
                    </div>
                </div>

            </div>
            ))}
            {this.state.odleave.map((ob, index) => (
            <div
                style={{height:"350px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"19px",margin:"30px",backgroundColor:"white"}}>
                <h5
                    style={{textAlign:"center",marginTop:"10px",fontWeight:"300",fontSize:"1.5rem",textShadow: "2px 2px 4px #000000"}}>
                    On-Duty Leave</h5>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
                    <div style={{display:"flex"}}>
                        <h6>Student Id : </h6>
                        <h6 style={{fontWeight:"300",textShadow: "0 0 3px #FF0000"}}>{ob.s_id}</h6>
                    </div>
                </div>
                <div style={{display:"flex",marginTop:"15px"}}>
                    <div style={{flex:0.5,display:"flex",justifyContent:"center"}}>
                        <h6>From : </h6>
                        <h6 style={{fontWeight:"300",textShadow: "0 0 3px #FF0000"}}>{ob.from_date}</h6>
                    </div>
                    <div style={{flex:"0.5",display:"flex",justifyContent:"center"}}>
                        <h6>To : </h6>
                        <h6 style={{fontWeight:"300",textShadow: "0 0 3px #FF0000"}}>{ob.to_date}</h6>
                    </div>
                </div>
                <h6
                    style={{textAlign:"center",marginTop:"20px",fontSize:"25px",fontWeight:"400",textDecoration:"underline",padding:"3px"}}>
                    Reason </h6>
                <p style={{textAlign:"center"}}>{ob.reason}</p>
                <div style={{display:"flex",margin: "30px",
 marginLeft: "140px"}}>
                <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                        this.accept(ob.s_id,"od")
                    }}
                            style={{flex:"0.3",height:"30px",width:"150px",color:"white",outline:"none",border:"none",borderRadius:"49px",backgroundColor:"#289672"}}>Accept</button>
                    </div>
                    <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                        this.reject(ob.s_id,"od")
                    }}
                            style={{flex:"0.3",height:"30px",width:"150px",color:"white",outline:"none",border:"none",borderRadius:"49px",backgroundColor:"#be0000"}}>Reject</button>
                    </div>
                    <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                        this.pennding(ob.s_id,"od")
                    }}
                            style={{flex:"0.3",height:"30px",width:"150px",color:"white",outline:"none",border:"none",borderRadius:"49px",backgroundColor:"#ffbe0f"}}>Accept</button>
                    </div>
                </div>

            </div>
            ))}
            {this.state.ordleave.map((ob, index) => (
            <div
                style={{height:"350px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"19px",margin:"30px",backgroundColor:"white"}}>
                <h5
                    style={{textAlign:"center",marginTop:"10px",fontWeight:"300",fontSize:"1.5rem",textShadow: "2px 2px 4px #000000"}}>
                    Ordinary Leave</h5>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
                    <div style={{display:"flex"}}>
                        <h6>Student Id : </h6>
                        <h6 style={{fontWeight:"300",textShadow: "0 0 3px #FF0000"}}>{ob.s_id}</h6>
                    </div>
                </div>
                <div style={{display:"flex",marginTop:"15px"}}>
                    <div style={{flex:0.5,display:"flex",justifyContent:"center"}}>
                        <h6>From : </h6>
                        <h6 style={{fontWeight:"300",textShadow: "0 0 3px #FF0000"}}>{ob.from_date}</h6>
                    </div>
                    <div style={{flex:"0.5",display:"flex",justifyContent:"center"}}>
                        <h6>To : </h6>
                        <h6 style={{fontWeight:"300",textShadow: "0 0 3px #FF0000"}}>{ob.to_date}</h6>
                    </div>
                </div>
                <h6
                    style={{textAlign:"center",marginTop:"20px",fontSize:"25px",fontWeight:"400",textDecoration:"underline",padding:"3px"}}>
                    Reason </h6>
                <p style={{textAlign:"center"}}>{ob.reason}</p>
                <div style={{display:"flex",margin: "30px",
 marginLeft: "140px"}}>
                    <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                        this.accept(ob.s_id,"ordinary")
                    }}
                            style={{flex:"0.3",height:"30px",width:"150px",color:"white",outline:"none",border:"none",borderRadius:"49px",backgroundColor:"#289672"}}>Accept</button>
                    </div>
                    <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                        this.reject(ob.s_id,"ordinary")
                    }}
                            style={{flex:"0.3",height:"30px",width:"150px",color:"white",outline:"none",border:"none",borderRadius:"49px",backgroundColor:"#be0000"}}>Reject</button>
                    </div>
                    <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}><button onClick={()=>{
                        this.pennding(ob.s_id,"ordinary")
                    }}
                            style={{flex:"0.3",height:"30px",width:"150px",color:"white",outline:"none",border:"none",borderRadius:"49px",backgroundColor:"#ffbe0f"}}>Accept</button>
                    </div>
                </div>

            </div>
            ))}

        </div>:<div>
            <h1
                style={{textAlign:"center",fontWeight:"300",fontSize:"1.5rem",marginTop:"15px",textShadow: "2px 2px 5px #f14668"}}>
                No leave Applicaiton left</h1>
        </div>
        }
    </div>

</div>
);
}
}

export default LeaveApprove;