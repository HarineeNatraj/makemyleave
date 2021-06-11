import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import Leftnav from '../leftnav/leftnav';
import Topnav from '../topnav/topnav';


class Contact extends React.Component{
  state={
    user:" "
  }
    render(){
        return(
          <div style={{display:"flex"}}>
            <div style={{flex:"0.1"}}>
                <Leftnav />
            </div>  
            <div class="grid" style={{scrollbarWidth:"none",flex:"0.9"}}>
            <main class="main">
            <div class="background">
            <Topnav />
                <h1 style={{textAlign:"center",fontWeight:"300", textShadow: "2px 2px 4px #000000"}}>Feel Free to contact us.!</h1>
  <div class="con">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT </span>
            <span> US</span>
          </div>
          <div class="app-contact">CONTACT INFO : +91 638-381-4799</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO" />
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE" />
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
                <br />
          <button class="app-form-button" 
              >Ping Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{height:"150px"}}> 
         
    </div>
  </div>
</div>

                </main>
                </div>
                </div>
        )
    }
}

export default Contact;