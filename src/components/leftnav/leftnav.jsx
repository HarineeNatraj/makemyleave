import React, { Component } from 'react';
import b1 from "../../Images/b1.png";
import panel from "../../Images/panel.svg";
import "./leftnav.css";
import {Link} from 'react-router-dom';
class Leftnav extends Component {
  render() {
    return (
        <div className="dash-left">
        <div className="header" style={{marginTop:"15px"}}>
            <div>
                <img style={{width:"25px"}} src={b1} alt="logo" />
                <h1
                    style={{display:"inline-block",textShadow:"2px 2px 4px #000000",fontSize:"1.3rem",marginLeft:"5px",marginTop:"5px"}}>
                    makemyleave</h1>
            </div>
            <Link style={{textDecoration:"none"}} to="/student_home"><button className="header-button"><i style={{color:"white",padding: "8px"}} class="fas fa-grip-vertical"></i>Dashboard</button></Link>
        </div>
        <hr style={{marginTop:"30px"}} />
        <div className="dash-left-main">
            {/* <div style={{height:"73px"}}>
                <h2 className="left-main-text"><i class="fas fa-grip-vertical"></i>   Dashboard</h2>
            </div> */}
            <div style={{height:"33px", borderBottom: "1px solid grey",display:"flex",marginBottom:"30px"}}>
            <i style={{paddingRight:"10px",paddingTop:"3px"}} class="fas fa-user-alt"></i>  
            <Link style={{textDecoration:"none"}} to="/my_profile"><h2 className="left-main-text"> My Profile</h2></Link>
            </div>
            <div style={{height:"33px", borderBottom: "1px solid grey",display:"flex",marginBottom:"30px"}}>
            <i style={{paddingRight:"10px",paddingTop:"3px"}} class="fas fa-table"></i>  
                <Link style={{textDecoration:"none"}} to="/time_table"><h2 className="left-main-text"> TimeTable   </h2></Link>
            </div>
            <div style={{height:"33px", borderBottom: "1px solid grey",display:"flex",marginBottom:"30px"}}>
            <i style={{paddingRight:"10px",paddingTop:"3px"}} class="fas fa-sign-out-alt"></i> 
            <Link style={{textDecoration:"none"}} to="/apply_leave"><h2 className="left-main-text"> Apply Leave   </h2></Link>
            </div>
            <div style={{height:"33px", borderBottom: "1px solid grey",display:"flex",marginBottom:"30px"}}>
            <i style={{paddingRight:"10px",paddingTop:"3px"}} class="fas fa-sign-out-alt"></i> 
            <Link style={{textDecoration:"none"}} to="/recent_activity"><h2 className="left-main-text"> Recent Activity   </h2></Link>
            </div>
            <div style={{height:"33px", borderBottom: "1px solid grey",display:"flex",marginBottom:"30px"}}>
            <i style={{paddingRight:"10px",paddingTop:"3px"}} class="fas fa-phone-alt"></i>  
              <Link style={{textDecoration:"none"}} to="/contact_us_make_my_leave"><h2 className="left-main-text">  Contact Us  </h2></Link>  
            </div>
            <img style={{width:"182px",height:"182px"}} src={panel} alt=""/>
        </div>
    </div>
    );
  }
}

export default Leftnav;
