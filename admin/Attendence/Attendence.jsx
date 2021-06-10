import React, { Component } from 'react';
import Topnav from "../admin-topnav/topnav";
import Leftnav from '../admin-leftnav/leftnav';
import axios from "axios";
import loading from "./loading.gif";
import upload from "./Upload.gif";
import "./attendence.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Attendence extends Component {
    state={
        per:[],
        att:[],
        total_class:0,
        dropdown:true,
        option:null,
        slist:[],
        aid:null,
        loading:false,
        c_list:{},
        today:[],
        sub:"null",
        att_status:[],
        s_id:[],
        present:[],
time:null,
upload:false
            }
        
handleAtt(e,id){
    this.setState(prevState => ({
        s_id: [...prevState.s_id, id],
        att_status: [...prevState.att_status, e.target.value]
      }))
}

handleSubmit = async () => {
    try {
        await this.state.s_id.map((id,index)=>{
            axios.post(`${process.env.REACT_APP_APILINK}/attendance_status`,{s_id:id,att_status:this.state.att_status[index],c_id:this.state.sub,att_date:this.state.time})
            .then(res=>{
            if(res.data==="Hello"){
            }
            else{
                toast.error("Attendence updation failed Try again :(",{
                    position: toast.POSITION.TOP_RIGHT, autoClose:3000});
                    this.setState({
                        sub:"null",
                        s_id:[],
                        att_status:[]
                    })
            }

            
        })
        })
             } catch (err) {
        // Handle Error Here
        console.error(err);
    }
    this.setState(
        {
            upload:false
        }
    )
    toast.success("Attendence added Successfuly",{
        position: toast.POSITION.TOP_RIGHT, autoClose:3000});
        this.setState({
            sub:"null",
            s_id:[],
            att_status:[]
        })

};


        componentDidMount(){
            // document.getElementById("cat_button").click();
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const name = rememberMe ? localStorage.getItem('name') : '';
            this.setState({
                aid:name
            })
            var today = new Date();
var t=today.toString();
t=t.slice(4,15)
this.setState({
    time:t
})

        }
        
handleSub=(e)=>{
this.setState({
    sub:e
})
}



        handleAdd=
            ()=>{
                this.setState({
                    c_list:{}
                })
                this.setState({
                    s_list:[]
                })
                this.setState({
                    today:[]
                })
                var week=["Sun","Mon","Tue","Wed","Thu","Fri"]
                var today = new Date();
console.log(today.getDay());
                this.setState({
                    option:"add"
                })
                this.setState({
                    dropdown:false
                })
                this.setState({
                    loading:true
                })
                axios.post(`${process.env.REACT_APP_APILINK}/show_tt`,{id:this.state.aid,type:"admin",day:week[today.getDay()]})
                .then(res=>{
                    res.data.map((ob,index)=>(
                        this.setState(prevState => ({
                            today: [...prevState.today, ob.c_id]
                          }))
                       ))
                })
                axios.post(`${process.env.REACT_APP_APILINK}/course_list`,{a_id:this.state.aid})
                .then(res=>{
                    var c={}
                    console.log(res.data);
                    res.data.map((ob, index) => {
                        c[ob.c_id]=ob.c_name
                                    })
                                this.setState({
                                    c_list:c
                                })
                                console.log("clist",this.state.c_list);
                })
                axios.post(`${process.env.REACT_APP_APILINK}/list_students`,{a_id:this.state.aid})
                .then(res=>{                   
                   res.data.map((ob,index)=>(
                    this.setState(prevState => ({
                        slist: [...prevState.slist, ob]
                      }))

                   ))
                   this.setState({
                    loading:false
                })
                   console.log(this.state.slist);
                   console.log(this.state.today);
                   console.log(this.state.c_list);
                   
                })
           
        }
        handleView=()=>{
            this.setState({
                loading:true
            })
            
this.setState({
    slist:[]
})
this.setState({
    present:[]
})
axios.post(`${process.env.REACT_APP_APILINK}/list_students`,{a_id:this.state.aid})
.then(res=>{                   
   res.data.map((ob,index)=>(
    this.setState(prevState => ({
        slist: [...prevState.slist, ob.s_id]
      }))
   ))
    })
    axios.get(`${process.env.REACT_APP_APILINK}/total_att`)
    .then(res=>{
this.setState({
    total_class:res.data[0]
})
    })
    axios.post(`${process.env.REACT_APP_APILINK}/attendance_count`,{a_id:this.state.aid})
    .then(res=>{
        res.data.map((ob,index)=>(
            this.setState(prevState => ({
                present: [...prevState.present, ob.cnt]
              }))
           ))
           this.setState({
            pre:[]
        })
        this.state.present.map((ob,index)=>{
            console.log("lv",ob,this.state.total_class);
    var t=parseInt(ob)/parseInt(this.state.total_class.total);
    t=t*100
    this.setState(prevState => ({
        per: [...prevState.per, t]
      }))
      this.setState({
        loading:false
    })
        })
    })
            this.setState({
                option:"view"
            })
            this.setState({
              dropdown:false
          })
        }
    render() {
        return (
            <div>
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
                              <button id="cat_button" type="button" class="btn btn-secondary" data-toggle="modal"
                                data-target="#exampleModalCenter">
                                Attendence option
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
                              <button style={{margin:"25px"}} data-dismiss="modal" onClick={this.handleView}    type="button" class="btn btn-dark"><i style={{color:"white",marginRight:"6px",marginTop:"2px"}} class="fas fa-eye"></i> View Attendence</button>
                              <button style={{margin:"25px"}} data-dismiss="modal" onClick={this.handleAdd}   type="button" class="btn btn-danger"><i style={{color:"white",marginRight:"6px",marginTop:"2px"}} class="fas fa-plus-circle"></i> Add Attendence</button>
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
                                        {
                                            this.state.upload?<div style={{display:"flex",justifyContent:"center",alignItems: 'center',}}>
<img src={upload} alt="" />
  <p>Uploading....</p>
                                            </div>:<div>
                                                <div style={{marginBottom:"30px"}}>
                                        <h2 style={{textAlign: "center",
    marginTop: "25px",textShadow: "2px 2px 5px #F14668",fontWeight:"300"}}>Attendence time <i class="fas fa-stopwatch"></i></h2>
    {
this.state.sub==="null"?<div style={{display:"flex",height:"500px",justifyContent:"center",alignItems: 'center',flexDirection:"column"}}>
    <h3 style={{textAlign: "center",
    marginTop: "25px",textShadow: "2px 2px 5px #F14668",fontWeight:"300"}}>Enter the Subject to add the Attendence</h3>
<select onChange={(e)=>{this.handleSub(e.target.value)}}  style={{height:"40px"}} required>
            <option value="" disabled selected hidden>Select the subject</option>
            {
                this.state.today.map((ob, index) => (
                    <option value={ob}>{this.state.c_list[ob]}</option>
                ))
            }
        </select>
    
</div>:<div>
    <div style={{display:"flex",flexDirection:"row"}}>
        <h3 style={{flex:0.5,textAlign:"center",fontWeight:"300",textShadow: "0 0 3px #FF0000",fontSize:"1.5rem"}}>Subject : {this.state.sub}</h3>
        <h3 style={{flex:0.5,textAlign:"center",fontWeight:"300",textShadow: "0 0 3px #FF0000",fontSize:"1.5rem"}}>Date : {this.state.time}</h3>
    </div>
{this.state.slist.map((ob, index) => (
  <div
                            style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",padding:"20px",margin:"20px",backgroundColor:"white",height:"100px",borderRadius:"9px",display:"flex"}}>
                            <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}>
                                <h4 style={{marginTop:"10px",fontWeight:"300"}}>{ob.s_id}</h4>
                            </div>
                            <div style={{flex:"0.2",display:"flex",justifyContent:"center"}}>
                                <h4 style={{marginTop:"10px",fontWeight:"300"}}>{ob.name}</h4>
                            </div>
                            <div  style={{flex:"0.5",display:"flex",flexDirection:"column",justifyContent:"center"}} class="form-check">
                            <RadioGroup style={{display:"flex",flexDirection:"row"}} aria-label="att-opt" name="att-opt"  onChange={(e)=>{this.handleAtt(e,ob.s_id)}} >
          <FormControlLabel style={{flex:"0.5"}} value="true" control={<Radio />} label="Present" />
          <FormControlLabel style={{flex:"0.5"}} value="false" control={<Radio />} label="Absent" />
        </RadioGroup>
</div>
                           
            
                        </div>   
                        
                        
                        ))}
                        <button onClick={()=>{this.handleSubmit()}}
                        style={{marginLeft:"44%",height:"30px",marginTop:"10px",outline:"none",border:"none",width:"150px",color:"white",backgroundColor:"#f14668",borderRadius:"9px"}}
                        type="" data-toggle="modal" data-target="#exampleModalCenter">Submit</button>
</div>
    }

                                        </div>
                                            </div>
                                        }
                                        
                                    </div>:
                                    <div>
                                         <h1
                style={{textAlign:"center",fontWeight:"300",fontSize:"1.5rem",marginTop:"15px",textShadow: "2px 2px 5px #f14668"}}>
                Attendance Percentage</h1>
                          
<div>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student Id</th>
      <th scope="col"># Attended classes</th>
      <th scope="col">Attendence Percentage</th>
    </tr>
  </thead>
  <tbody>
      {
          this.state.slist.map((ob,index)=>(
<tr>
      <th scope="row">{index+1}</th>
      <td>{ob}</td>
      <td>{this.state.present[index]}</td>
      <td>{this.state.per[index]}</td>
    </tr>
          ))
      }
  </tbody>
</table>
<button onClick={()=>{this.setState({
    dropdown:true
})}}
                        style={{marginLeft:"44%",height:"30px",marginTop:"10px",outline:"none",border:"none",width:"150px",color:"white",backgroundColor:"#f14668",borderRadius:"9px"}}
                        type="" data-toggle="modal" data-target="#exampleModalCenter">Back</button>
</div>

                                    </div>
                                }
                            </div>
                            
                        }
                </div>
            }
    </div>
         </div>   
            </div>
        )
    }
}

export default Attendence
