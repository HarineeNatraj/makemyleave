import React, { Component } from 'react'
import "./Login.css"
import admin from "../../Images/admin.svg";
import student from "../../Images/student.svg";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import l1 from "../../Images/l1.png"
import b1 from "../../Images/b1.png";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default class Login extends Component {
    state={
        gender:"",
        name:"",
        password:"",
        flag:"",
        content:"",
        type:"",
        rememberMe:false
    }
    onChangename=(e)=>{
this.setState({
    name:e.target.value
})
    }
    onChangepass=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    onChangemale=(e)=>{
      this.setState({
          gender:"male"
      })
    }
    onChangefemale=(e)=>{
        this.setState({
            gender:"female"
        })
      }
    
    log_in = e => {
        e.preventDefault();
const container=document.querySelector(".login-container");
container.classList.add("log-in-mode");
    }
    handlesubmit=(e)=>{
        e.preventDefault();
        const user={
            name:this.state.name,
            password:this.state.password
        }
        axios.post(`${process.env.REACT_APP_APILINK}`, { user })
      .then(res => {
          console.log(res.data);
        this.setState({
            flag:res.data.flag
        })
        console.log(res.data.type);
        if(res.data.flag){
this.setState({
    content:"Successfull login"
})
this.setState({
    type:"success"
})
if(this.state.rememberMe){
    localStorage.setItem('rememberMe', this.state.rememberMe);
    localStorage.setItem('name',this.state.name);
    localStorage.setItem('password',this.state.password);
    localStorage.setItem('type',res.data.type);
}
this.props.history.push("/student_home");
        }
        else{
            this.setState({
                content:"Authentication failed"
            })
            this.setState({
                type:"error"
            })
        }

      })

    }
    admin_log_in=e=>{
        e.preventDefault();
        const container=document.querySelector(".login-container");
        container.classList.remove("log-in-mode");
    }
    navigate=()=>{
        this.props.history.push("/forgot-password/"+this.state.gender)
    }
    handleClose=()=>{
        this.setState(
            {
                flag:false
            }
        )
    }
    handleremember=()=>{
        this.setState(
            {
                rememberMe:!this.state.rememberMe
            }
        )
    }
    componentDidMount(){
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
  const name = rememberMe ? localStorage.getItem('name') : '';
  const password = rememberMe ? localStorage.getItem('password') : '';
  if(name && password){
      this.props.history.push("/student_home");
  }
    }
render() {
return (
<div>
    <div className="login-container">
        <div className="login-form-container">
        <Snackbar bodyStyle={{ height: 300, width: 300 }} anchorOrigin={{ vertical:'top', horizontal:'center' }} key={this.state.vertical + this.state.horizontal} open={this.state.flag} autoHideDuration={3000} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity={this.state.type}>
         {this.state.content}
        </Alert>
      </Snackbar>
            <div className="login-signin-signup">
                <form action="" className="login-sign-in-form">
                <img src={b1} className="logo" alt="" />
                    <h2 className="login-title">Sign In</h2>
                    <div className="login-input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" onChange={this.onChangename} placeholder="Roll.no / Mail id" autoComplete="off" />
                    </div>
                    <div className="login-input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" onChange={this.onChangepass} placeholder="Password" autoComplete="off" />
                    </div>
                    <FormControlLabel
        control={<Checkbox  onChange={this.handleremember} name="admin-remember"  color="primary" />}
        label="Remember Me"
      />
                    <input type="submit" value="Sign In" onClick={this.handlesubmit}  className="login-btn solid" id="sign-in-btn" />
                    <Link  data-toggle="modal" data-target="#exampleModalCenter">Forgot Password</Link>
                    <p className="login-social-text" style={{color:"#c0c0c0"}}>© MakeMyLeave</p>
                </form>
                <form action="" className="login-log-in-form">
                <img src={l1} className="logo" alt="" />
                    <h2 className="login-title">Sign In</h2>
                    <div className="login-input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" onChange={this.onChangename} placeholder="Mail Id" autoComplete="off" />
                    </div>
                    <div className="login-input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" onChange={this.onChangepass} placeholder="Password" autoComplete="off" />
                    </div>
                    <FormControlLabel
        control={<Checkbox  onChange={this.handleremember} name="admin-remember" />}
        label="Remember Me"
      />
                    <input type="submit" value="Sign in" onClick={this.handlesubmit} className="login-btn1 solid" id="log-in-btn" />
                    <Link style={{color:"#f14666"}} data-toggle="modal" data-target="#exampleModalCenter">Forgot Password</Link>
                    <p className="login-social-text" style={{color:"#c0c0c0"}}>© MakeMyLeave</p>
                </form>
            </div>
        </div>
        <div className="login-panel-container">
            <div className="login-panel login-left-panel">
                <div className="login-content">
                    <h3>Are You an Admin ?</h3>
                    <p>Click here to log in!</p>
                    <button className="login-btn transparent" onClick={this.log_in} id="log-in-btn">Log In</button>
                </div>
                <img src={student} className="login-img" alt="" />
            </div>
            <div className="login-panel login-right-panel">
                <div className="login-content">
                    <h3>Are You a Student ?</h3>
                    <p>Click here to log in!</p>
                    <button className="login-btn transparent" onClick={this.admin_log_in} id="sign-in-btn">Sign In</button>
                </div>
                <img src={admin} className="login-img" alt="" />
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Forgot Password</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <h3>Choose your Gender</h3>
          <label className="container">Male
  <input type="radio" onClick={this.onChangemale}  name="radio" />
  <span className="checkmark"></span>
</label>
<label class="container">Female
  <input type="radio" onClick={this.onChangefemale} name="radio" />
  <span class="checkmark"></span>
</label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
    <button type="button" onClick={this.navigate} class="btn btn-outline-dark" data-dismiss="modal">Next</button>
       </div>
    </div>
  </div>
</div>
</div>
)
}
}
