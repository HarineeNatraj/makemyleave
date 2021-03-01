import React, { Component } from 'react';
import Secure from '../../Images/secure-logo.png';
import {TextField} from '@material-ui/core';
import {SendOutlined} from '@material-ui/icons';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
export class Model extends Component {
    state={
        open:false,
        vertical:'top',
        horizontal:'center',
        panel:0,
        content:"",
        roll:"",
        type:"",
        otp:0,
        password:"",
        reenter:""
    }
    handlepassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handlereenter=(e)=>{
        this.setState({
            reenter:e.target.value
        })
    }
    handleotp=(e)=>{
        this.setState({
            otp:e.target.value
        })
    }
    handleroll=(e)=>{
        this.setState({
            roll:e.target.value
        })
    }
    handlemail=(e)=>{
e.preventDefault();
const user={
    username:this.state.roll
}
console.log(this.state.roll);
axios.post(`http://b2bd9965ee34.ngrok.io/User_details`, { user })
.then(res => {
    console.log(res.data);
    const t=res.data.flag;
    console.log(t);
  if(t){
    this.setState({
        content:"Email has been sent to your registered mailid"
    })
    this.setState({
        open:true
    })
    this.setState({
        type:"success"
    })
    
    this.setState({
        panel:1
    })
  }
  else{
    this.setState({
        content:"Invalid Roll number"
    })
    this.setState({
        type:"error"
    })
    this.setState({
        open:true
    })
  }
})

    }
    handleClose=()=>{
        this.setState({
            open:false
        })
    }
    handlecheck=()=>{
       
        const user={
            otp:this.state.otp
        }
        axios.post(`http://b2bd9965ee34.ngrok.io/otp`, { user })
.then(res => {
    console.log(res.data);
    if(res.data.flag){
        this.setState({
            content:"OTP verified successfully"
        })
        this.setState({
            type:"success"
        })
        this.setState({
            open:true
        })
        const form=document.querySelector(".check-form");
        form.style.display="none";
        this.setState({
            panel:2
        })
    }
    else{
        this.setState({
            type:"error"
        })
        this.setState({
            content:"OTP is wrong"
        })
        this.setState({
            open:true
        })
    }
})
       
    }
    handleconfirm=(e)=>{
e.preventDefault();
const user={
    password:this.state.password,
    repassword:this.state.reenter
}
axios.post(`http://b2bd9965ee34.ngrok.io/change_credentials`, { user })
.then(res => {
    console.log(res.data);
    if(res.data.flag){
        this.setState({
            content:"Your Password has been Successfully Changed"
        })
        this.setState({
            open:true
        })
        this.setState({
            type:"success"
        })
        setTimeout(() => {
            this.props.history.push("/login");
        }, 1500);
    }
    else{
        this.setState({
            content:"Your Password has not been chnaged"
        })
        this.setState({
            type:"error"
        })
        this.setState({
            open:true
        })
    }
})
       
     
    }
    render() {
        return (
            <div>
                {
                    this.props.match.params.gender==="male"?<div className="male-bg">
                             <Snackbar bodyStyle={{ height: 300, width: 300 }} anchorOrigin={{ vertical:'top', horizontal:'center' }} key={this.state.vertical + this.state.horizontal} open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity={this.state.type}>
         {this.state.content}
        </Alert>
      </Snackbar>
                        {
                            this.state.panel===0? <div className="passwrod-form">
                            <img style={{width:"100px",height:"100px",padding:"10px"}} src={Secure} alt="" />
                           <h2 className="model-title">Have You Lost ?</h2>
                           <TextField id="outlined-basic" onChange={this.handleroll} label="Enter Your RollNo" helperText="*Your Info should not be shared to anywhere" variant="outlined" />
                           <button  style={{fontSize:"1.5rem",marginTop:"33px"}} onClick={this.handlemail} type="button" class="btn btn-primary">Send  <SendOutlined /> </button>
                        </div>:
                        <div className="check-form">
                            <img style={{width:"100px",height:"100px",padding:"10px"}} src={Secure} alt="" />
                           <h2 className="model-title">Verifiy Yourself .!</h2>
                           <TextField
                           onChange={this.handleotp}
          label="Enter Verification code"
          id="filled-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">L-</InputAdornment>,
          }}
          variant="outlined"
        />                           <button  style={{fontSize:"1.5rem",marginTop:"33px"}} onClick={this.handlecheck} type="button" class="btn btn-primary">Check <CheckCircleOutlineOutlinedIcon /> </button>
                        </div>
                        }
                        {
                            this.state.panel===2?
                            <div className="reset-form">
                            <img style={{width:"100px",height:"100px",padding:"10px"}} src={Secure} alt="" />
                           <h2 className="model-title">Reset Yourself</h2>
                           <TextField id="outlined-basic" onChange={this.handlepassword} label="New Passeord" variant="outlined" />
                           <TextField id="outlined-basic" onChange={this.handlereenter} label="Re-enter it" helperText="*Your Info should not be shared to anywhere" variant="outlined" />
                       <button  style={{fontSize:"1.5rem",marginTop:"33px"}} onClick={this.handleconfirm} type="button" class="btn btn-primary">Change Password <CheckCircleOutlineOutlinedIcon /> </button>
                        </div>:<div></div>
                        }
                    
                       
                        </div>:<div className="female-bg">
                        <Snackbar bodyStyle={{ height: 300, width: 300 }} anchorOrigin={{ vertical:'top', horizontal:'center' }} key={this.state.vertical + this.state.horizontal} open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity="success">
         {this.state.content}
        </Alert>
      </Snackbar>
      {
                            this.state.panel===0? <div className="passwrod-form">
                            <img style={{width:"100px",height:"100px",padding:"10px"}} src={Secure} alt="" />
                           <h2 className="model-title">Have You Lost ?</h2>
                           <TextField id="outlined-basic" onChange={this.handleroll} label="Enter Your RollNo" helperText="*Your Info should not be shared to anywhere" variant="outlined" />
                           <button  style={{fontSize:"1.5rem",marginTop:"33px"}} onClick={this.handlemail} type="button" class="btn btn-primary">Send  <SendOutlined /> </button>
                        </div>:
                        <div className="check-form">
                            <img style={{width:"100px",height:"100px",padding:"10px"}} src={Secure} alt="" />
                           <h2 className="model-title">Verifiy Yourself .!</h2>
                           <TextField
                           onChange={this.handleotp}
          label="Enter Verification code"
          id="filled-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">L-</InputAdornment>,
          }}
          variant="outlined"
        />                           <button  style={{fontSize:"1.5rem",marginTop:"33px"}} onClick={this.handlecheck} type="button" class="btn btn-primary">Check <CheckCircleOutlineOutlinedIcon /> </button>
                        </div>
                        }
                        {
                            this.state.panel===2?
                            <div className="reset-form">
                            <img style={{width:"100px",height:"100px",padding:"10px"}} src={Secure} alt="" />
                           <h2 className="model-title">Reset Yourself</h2>
                           <TextField id="outlined-basic" onChange={this.handlepassword} label="New Password" variant="outlined" />
                           <TextField id="outlined-basic" onChange={this.handlereenter} label="Re-enter it" helperText="*Your Info should not be shared to anywhere" variant="outlined" />
                       <button  style={{fontSize:"1.5rem",marginTop:"33px"}} onClick={this.handleconfirm} type="button" class="btn btn-primary">Change Password <CheckCircleOutlineOutlinedIcon /> </button>
                        </div>:<div></div>
                        }
                        </div>
                }
            </div>
        )
    }
}

export default Model
