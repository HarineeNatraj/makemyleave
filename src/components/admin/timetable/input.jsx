import React, { Component } from 'react'
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class Input extends Component {

    state={
        mon:{
            P1:null,
            P2:null,
            P3:null,
            P4:null,
            P5:null,
            P6:null
        },
        tue:{
            P1:null,
            P2:null,
            P3:null,
            P4:null,
            P5:null,
            P6:null
        },
        wed:{
            P1:null,
            P2:null,
            P3:null,
            P4:null,
            P5:null,
            P6:null
        },
        thurs:{
            P1:null,
            P2:null,
            P3:null,
            P4:null,
            P5:null,
            P6:null
        },
        fri:{
            P1:null,
            P2:null,
            P3:null,
            P4:null,
            P5:null,
            P6:null
        },
        clist:[]
        
    }
    componentDidMount(){
this.setState({
    clist:this.props.data
})
    }
    handleSubmit=(day)=>{
        if(day==="Mon"){
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const name = rememberMe ? localStorage.getItem('name') : '';
                axios.post(`${process.env.REACT_APP_APILINK}/time_table`,{
                    "a_id":name,
                    "day":day,
                    "P1":this.state.mon.P1,
                    "P2":this.state.mon.P2,
                    "P3":this.state.mon.P3,
                    "P4":this.state.mon.P4,
                    "P5":this.state.mon.P5,
                    "P6":this.state.mon.P6,
                })
                .then(res=>{
                    console.log(res.data);
        if(res.data==="Done"){
            toast.success(day+"day has been added Successfully",{
                position: toast.POSITION.TOP_RIGHT, autoClose:3000});
        }
                })
        }
        if(day==="Tue"){
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const name = rememberMe ? localStorage.getItem('name') : '';
                axios.post(`${process.env.REACT_APP_APILINK}/time_table`,{
                    "a_id":name,
                    "day":day,
                    "P1":this.state.tue.P1,
                    "P2":this.state.tue.P2,
                    "P3":this.state.tue.P3,
                    "P4":this.state.tue.P4,
                    "P5":this.state.tue.P5,
                    "P6":this.state.tue.P6,
                })
                .then(res=>{
                    if(res.data=="Done"){
                        toast.success(day+"sday has been added Successfully",{
                            position: toast.POSITION.TOP_RIGHT, autoClose:3000});
                    }                })
        }
        if(day==="Wed"){
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const name = rememberMe ? localStorage.getItem('name') : '';
                axios.post(`${process.env.REACT_APP_APILINK}/time_table`,{
                    "a_id":name,
                    "day":day,
                    "P1":this.state.wed.P1,
                    "P2":this.state.wed.P2,
                    "P3":this.state.wed.P3,
                    "P4":this.state.wed.P4,
                    "P5":this.state.wed.P5,
                    "P6":this.state.wed.P6,
                })
                .then(res=>{
                    if(res.data=="Done"){
                        toast.success(day+"nesday has been added Successfully",{
                            position: toast.POSITION.TOP_RIGHT, autoClose:3000});
                    }                })
        }
        if(day==="Thu"){
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const name = rememberMe ? localStorage.getItem('name') : '';
                axios.post(`${process.env.REACT_APP_APILINK}/time_table`,{
                    "a_id":name,
                    "day":day,
                    "P1":this.state.thurs.P1,
                    "P2":this.state.thurs.P2,
                    "P3":this.state.thurs.P3,
                    "P4":this.state.thurs.P4,
                    "P5":this.state.thurs.P5,
                    "P6":this.state.thurs.P6,
                })
                .then(res=>{
                    if(res.data=="Done"){
                        toast.success(day+"rsday has been added Successfully",{
                            position: toast.POSITION.TOP_RIGHT, autoClose:3000});
                    }                })
        }
        if(day==="Fri"){
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const name = rememberMe ? localStorage.getItem('name') : '';
                axios.post(`${process.env.REACT_APP_APILINK}/time_table`,{
                    "a_id":name,
                    "day":day,
                    "P1":this.state.fri.P1,
                    "P2":this.state.fri.P2,
                    "P3":this.state.fri.P3,
                    "P4":this.state.fri.P4,
                    "P5":this.state.fri.P5,
                    "P6":this.state.fri.P6,
                })
                .then(res=>{
                    if(res.data=="Done"){
                        toast.success(day+"day has been added Successfully",{
                            position: toast.POSITION.TOP_RIGHT, autoClose:3000});
                    }                })
        }
        
    }
    handleSlot =(val,day,slot)=>{
console.log(val,day,slot);
if(day==="Mon"){
    var t=this.state.mon
    var a=this.state.clist[val]
    t[slot]=a.c_id
    this.setState({
        mon:t
    })
}
if(day==="Tue"){
    var t=this.state.tue
    var a=this.state.clist[val]
    t[slot]=a.c_id
    this.setState({
        tue:t
    })
}
if(day==="Wed"){
    var t=this.state.wed
    var a=this.state.clist[val]
    t[slot]=a.c_id
    this.setState({
        wed:t
    })
}
if(day==="Thu"){
    var t=this.state.thurs
    var a=this.state.clist[val]
    t[slot]=a.c_id
    this.setState({
        thurs:t
    })
}
if(day==="Fri"){
    var t=this.state.fri
    var a=this.state.clist[val]
    t[slot]=a.c_id
    this.setState({
        fri:t
    })
}
    }
    
    render() {
        var name=this.props.dname
        return (
            <div>
            <div>
            <h2 style={{marginLeft: "60px",
        marginTop: "30px",
        fontWeight: "inherit",
        textShadow: "0 0 3px #ff0000"}}>{this.props.day}</h2>
        <div style={{display:"flex",marginLeft:"60px"}}>
            <div style={{flex:0.6,margin:"30px",marginTop:"10px"}}>
            <h4 style={{fontWeight: "400",
        fontSize: "20px", textShadow: "2px 2px 4px #000000"}}>Period 1</h4>
        <select onChange={(e)=>{this.handleSlot(e.target.value,name,"P1")}}  style={{height:"40px"}} required>
            <option value="" disabled selected hidden>Select the subject</option>
            {
                this.props.data.map((ob, index) => (
                    <option value={index}>{ob.c_name}</option>
                ))
            }
        </select>
            </div>
            <div style={{flex:0.6,margin:"30px",marginTop:"10px"}}>
            <h4 style={{fontWeight: "400",
        fontSize: "20px", textShadow: "2px 2px 4px #000000"}}>Period 2</h4>
         <select onChange={(e)=>{this.handleSlot(e.target.value,name,"P2")}}  style={{height:"40px"}} required>
            <option value="" disabled selected hidden>Select the subject</option>
            {
                this.props.data.map((ob, index) => (
                    <option value={index}>{ob.c_name}</option>
                ))
            }
        </select>
            </div>
            <div style={{flex:0.6,margin:"30px",marginTop:"10px"}}>
            <h4 style={{fontWeight: "400",
        fontSize: "20px", textShadow: "2px 2px 4px #000000"}}>Period 3</h4>
         <select onChange={(e)=>{this.handleSlot(e.target.value,name,"P3")}}  style={{height:"40px"}} required>
            <option value="" disabled selected hidden>Select the subject</option>
            {
                this.props.data.map((ob, index) => (
                    <option value={index}>{ob.c_name}</option>
                ))
            }
        </select>
            </div>
            <div style={{flex:0.6,margin:"30px",marginTop:"10px"}}>
            <h4 style={{fontWeight: "400",
        fontSize: "20px", textShadow: "2px 2px 4px #000000"}}>Period 4</h4>
         <select onChange={(e)=>{this.handleSlot(e.target.value,name,"P4")}}  style={{height:"40px"}} required>
            <option value="" disabled selected hidden>Select the subject</option>
            {
                this.props.data.map((ob, index) => (
                    <option value={index}>{ob.c_name}</option>
                ))
            }
        </select>
            </div>
        </div>
        <div style={{display:"flex",marginLeft:"60px"}}>
        <div style={{flex:0.6,margin:"30px",marginTop:"10px"}}>
        <h4 style={{fontWeight: "400",
        fontSize: "20px", textShadow: "2px 2px 4px #000000"}}>Period 5</h4>
         <select onChange={(e)=>{this.handleSlot(e.target.value,name,"P5")}}  style={{height:"40px"}} required>
            <option value="" disabled selected hidden>Select the subject</option>
            {
                this.props.data.map((ob, index) => (
                    <option value={index}>{ob.c_name}</option>
                ))
            }
        </select>
            </div>
            <div style={{flex:0.6,margin:"30px",marginTop:"10px"}}>
            <h4 style={{fontWeight: "400",
        fontSize: "20px", textShadow: "2px 2px 4px #000000"}}>Period 6</h4>
         <select onChange={(e)=>{this.handleSlot(e.target.value,name,"P6")}}  style={{height:"40px"}} required>
            <option value="" disabled selected hidden>Select the subject</option>
            {
                this.props.data.map((ob, index) => (
                    <option value={index}>{ob.c_name}</option>
                ))
            }
        </select>
            </div>
            <div style={{flex:0.6,margin:"30px",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
        </div>
            <div style={{flex:0.6}}>
            </div>
        </div>
        </div>
        <div style={{display:"flex",marginLeft:"90px"}}>
            <button onClick={()=>this.handleSubmit(this.props.dname)} style={{height:"40px",width:"100px",border:"none",color:"white",outline:"none",backgroundColor:"#f14668",borderRadius:"19px"}}>Save <i style={{color:"white",marginLeft:"5px"}} class="fas fa-save"></i> </button>
        
        </div>
        <ToastContainer />
        </div>
        )
    }
}

export default Input
