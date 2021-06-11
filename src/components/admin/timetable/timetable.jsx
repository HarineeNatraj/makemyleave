import React, { Component } from 'react'
import Topnav from "../admin-topnav/topnav";
import Leftnav from '../admin-leftnav/leftnav';
import axios from "axios";
import loading from "./loading.gif";
import Input from "./input";
import Cal from "../Calender/cframe";

export default class timetable extends Component {
    state={
dropdown:true,
option:"Add",
clist:[],
aid:null,
loading:false,
    }

componentDidMount(){
    // document.getElementById("cat_button").click();
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const name = rememberMe ? localStorage.getItem('name') : '';
    this.setState({
        aid:name
    })
}

handleAdd=
    ()=>{
        this.setState({
            option:"add"
        })
        this.setState({
            dropdown:false
        })
        this.setState({
            loading:true
        })
        axios.post(`${process.env.REACT_APP_APILINK}/course_list`,{a_id:this.state.aid})
        .then(res=>{
            res.data.map((ob, index) => {
                this.setState(prevState => ({
                                clist: [...prevState.clist, ob]
                              }))
                            })
                            console.log(this.state.clist);
                            this.setState({
                                loading:false
                            })
        })
   
}


    render() {
        return (
         <div style={{display:"flex"}}>
<div style={{flex:"0.1"}}>
            <Leftnav />
        </div>
        <div style={{flex:"0.9"}}>
            <Topnav />
            {
                this.state.loading?<div style={{height:"100%",flexDirection:"column",display:"flex",justifyContent: 'center',alignItems: 'center',}}>
  <img src={loading} alt="" />
  <p>Loading....</p>
                </div>:
                <div>
 {
                            this.state.dropdown?<div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
                                <h1 style={{fontSize:"1.2rem",fontWeight:"200",textAlign:"center"}}>A plan is what, a schedule is when.It takes both plan and a schedule to get things done</h1>
                              <button id="cat_button" type="button" class="btn btn-primary" data-toggle="modal"
                                data-target="#exampleModalCenter">
                                Time-Table option
                              </button>
                              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Choose an option</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                              <button style={{margin:"25px"}} data-dismiss="modal" onClick={()=>{
                                  this.setState({
                                      option:"view"
                                  })
                                  this.setState({
                                    dropdown:false
                                })
                              }}     type="button" class="btn btn-dark"><i style={{color:"white",marginRight:"6px",marginTop:"2px"}} class="fas fa-eye"></i> View Time Table</button>
                              <button style={{margin:"25px"}} data-dismiss="modal" onClick={this.handleAdd}   type="button" class="btn btn-danger"><i style={{color:"white",marginRight:"6px",marginTop:"2px"}} class="fas fa-plus-circle"></i> Add/Edit Time Table</button>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                            </div>:<div>
                                {
                                    this.state.option==="add"?<div>
                                        <div style={{marginBottom:"30px"}}>
                                            
                                        <h2 style={{textAlign: "center",
    marginTop: "25px",textShadow: "2px 2px 5px #F14668",fontWeight:"300"}}>Add Your TimeTable</h2>
    <button onClick={()=>{this.setState({
    dropdown:true
})}}
                        style={{marginLeft:"44%" , marginBottom:"20px",height:"30px",marginTop:"10px",outline:"none",border:"none",width:"150px",color:"white",backgroundColor:"#f14668",borderRadius:"9px"}}
                        type="" data-toggle="modal" data-target="#exampleModalCenter">Back</button>
  <Input data={this.state.clist}  day={"Monday"} dname={"Mon"} />
  <Input data={this.state.clist} day={"Tuesday"} dname={"Tue"} />
  <Input data={this.state.clist} day={"Wednesday"} dname={"Wed"} />
  <Input data={this.state.clist} day={"Thursday"} dname={"Thu"} />
  <Input data={this.state.clist} day={"Friday"} dname={"Fri"} />
                                        </div>
                                    </div>:
                                    <div>
                                        <button onClick={()=>{this.setState({
    dropdown:true
})}}
                        style={{marginLeft:"44%" , marginBottom:"20px",height:"30px",marginTop:"10px",outline:"none",border:"none",width:"150px",color:"white",backgroundColor:"#f14668",borderRadius:"9px"}}
                        type="" data-toggle="modal" data-target="#exampleModalCenter">Back</button>
                                        <Cal></Cal>
                                    </div>
                                }
                            </div>
                            
                        }
                </div>
            }
    </div>
         </div>   
        )
    }
}
