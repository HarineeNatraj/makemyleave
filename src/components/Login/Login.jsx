import React, { Component } from 'react'
import "./Login.css"
import admin from "../../Images/admin.svg";
import student from "../../Images/student.svg";

export default class Login extends Component {
    
    log_in = e => {
        e.preventDefault();
const container=document.querySelector(".login-container");
container.classList.add("log-in-mode");
    }
    admin_log_in=e=>{
        e.preventDefault();
        const container=document.querySelector(".login-container");
        container.classList.remove("log-in-mode");
    }
render() {
return (
<div>
    <div className="login-container">
        <div className="login-form-container">
            <div className="login-signin-signup">
                <form action="" className="login-sign-in-form">
                    <h2 className="login-title">Sign In</h2>
                    <div className="login-input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" name="" placeholder="Roll.no / Mail id" autoComplete="off" />
                    </div>
                    <div className="login-input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" name="" placeholder="Password" autoComplete="off" />
                    </div>
                    <input type="submit" value="Sign In"  className="login-btn solid" id="sign-in-btn" />
                    <p className="login-social-text">Or Contact Admin</p>
                </form>

                <form action="" className="login-log-in-form">
                    <h2 className="login-title">Sign In</h2>
                    <div className="login-input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" name="" placeholder="Mail Id" autoComplete="off" />
                    </div>
                    <div className="login-input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" name="" placeholder="Password" autoComplete="off" />
                    </div>
                    <input type="submit" value="Sign in" onClick={this.log_in} className="login-btn1 solid" id="log-in-btn" />
                    <p className="login-social-text">Or Contact Admin</p>
                </form>
            </div>
        </div>
        <div className="login-panel-container">
            <div className="login-panel login-left-panel">
                <div className="login-content">
                    <h3>Are You an Admin ?</h3>
                    <p>Lorem kjdfnsdjvnf efjnodjvnoslnvlskdnvl jknclsdnsldnvojksokcmd</p>
                    <button className="login-btn transparent" onClick={this.log_in} id="log-in-btn">Log In</button>
                </div>
                <img src={student} className="login-img" alt="" />
            </div>
            <div className="login-panel login-right-panel">
                <div className="login-content">
                    <h3>Are You a Student ?</h3>
                    <p>Lorem kjdfnsdjvnf efjnodjvnoslnvlskdnvl jknclsdnsldnvojksokcmd</p>
                    <button className="login-btn transparent" onClick={this.admin_log_in} id="sign-in-btn">Sign In</button>
                </div>
                <img src={admin} className="login-img" alt="" />
            </div>
        </div>
    </div>
</div>
)
}
}