import React, { Component } from 'react';
import Topnav from "../admin-topnav/topnav";
import Leftnav from '../admin-leftnav/leftnav';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Studentedit extends Component {
state={
student:[],
user:{
    u_type:"student",
    s_id:null,
    password:null,
    dep_id:null,
    image:"null",
    b_id:null,
    cgpa:0,
    curr_sem:null,
    s1_sgpa:"null",
    s2_sgpa:"null",
    s3_sgpa:"null",
    s4_sgpa:"null",
    s5_sgpa:"null",
    s6_sgpa:"null",
    s7_sgpa:"null",
    s8_sgpa:"null",
    phoneno:"null",
    name:null
}

}

handleDelete=(id)=>{
    axios.post(`${process.env.REACT_APP_APILINK}/remove_student`,{s_id:id})
    .then(res=>{
        if(res.data==="Deleted"){
            alert("Successfully deleted")
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const name = rememberMe ? localStorage.getItem('name') : '';
    axios.post(`${process.env.REACT_APP_APILINK}/list_students`,{a_id:name})
    .then(res=>{
        this.setState({
            student:[]
        })
        console.log(res.data);
        res.data.map((ob, index) => {
            this.setState(prevState => ({
                            student: [...prevState.student, ob]
                          }))
        })
        })
    }
})
}

componentDidMount(){
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const name = rememberMe ? localStorage.getItem('name') : '';
    axios.post(`${process.env.REACT_APP_APILINK}/list_students`,{a_id:name})
    .then(res=>{
        console.log(res.data);
        res.data.map((ob, index) => {
            this.setState(prevState => ({
                            student: [...prevState.student, ob]
                          }))
        })
        console.log(this.state.student.length);
    })
}

handleSubmit=(e)=>{
  this.setState({
    cgpa:0
  })
  if(this.state.user["s1_sgpa"]!=="null"){
    this.state.user["cgpa"]+=this.state.user["s1_sgpa"]
  }
  if(this.state.user["s2_sgpa"]!=="null"){
    this.state.user["cgpa"]+=this.state.user["s2_sgpa"]
  }
  if(this.state.user["s3_sgpa"]!=="null"){
    this.state.user["cgpa"]+=this.state.user["s3_sgpa"]
  }
  if(this.state.user["s4_sgpa"]!=="null"){
    this.state.user["cgpa"]+=this.state.user["s4_sgpa"]
  }
  if(this.state.user["s5_sgpa"]!=="null"){
    this.state.user["cgpa"]+=this.state.user["s5_sgpa"]
  }
  if(this.state.user["s6_sgpa"]!=="null"){
    this.state.user["cgpa"]+=this.state.user["s6_sgpa"]
  }
  if(this.state.user["s7_sgpa"]!=="null"){
    this.state.user["cgpa"]+=this.state.user["s7_sgpa"]
  }
  if(this.state.user["s8_sgpa"]!=="null"){
    this.state.user["cgpa"]+=this.state.user["s8_sgpa"]
  }
  console.log(this.state.user["cgpa"]);
  this.state.user["cgpa"]=this.state.user["cgpa"]/this.state.user["curr_sem"]
e.preventDefault();
axios.post(`${process.env.REACT_APP_APILINK}/add_students`,this.state.user)
.then(res=>{
  console.log(res.data);
    if(res.data==="Inserted"){
      const t=this.state.user
      t["name"]=null
      t["s_id"]=null
      t["b_id"]=null
      t["cgpa"]=null
      t["dep_id"]=null
      t["images"]=null
      t["curr_sem"]=null
      t["s1_sgpa"]=null
      t["s2_sgpa"]=null
      t["s3_sgpa"]=null
      t["s4_sgpa"]=null
      t["s5_sgpa"]=null
      t["s6_sgpa"]=null
      t["s7_sgpa"]=null
      t["s8_sgpa"]=null
      t["phoneno"]=null
  this.setState({
      user:t
  })
      toast.success("Student Added Successfully",{
        position: toast.POSITION.TOP_RIGHT, autoClose:3000});
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const name = rememberMe ? localStorage.getItem('name') : '';
    axios.post(`${process.env.REACT_APP_APILINK}/list_students`,{a_id:name})
    .then(res=>{
        console.log(res.data);
        this.setState({
            student:[]
        })
        console.log(res.data);
        res.data.map((ob, index) => {
            this.setState(prevState => ({
                            student: [...prevState.student, ob]
                          }))
        })
        })
    }
})
}
handleChange=(type,value)=>{
    const t=this.state.user
    if(type==="curr_sem" || type==="s1_sgpa" || type==="s2_sgpa" || type==="s3_sgpa" || type==="s4_sgpa" || type==="s5_sgpa" || type==="s6_sgpa" || type==="s7_sgpa" || type==="s8_sgpa"){
      console.log(type);
      t[type]=parseInt(value)
    }
    else{
      t[type]=value
    }
this.setState({
    user:t
})
// console.log(this.state);
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
        this.state.student.length>0?<div>
            <h1
                style={{textAlign:"center",fontWeight:"300",fontSize:"1.5rem",marginTop:"15px",textShadow: "2px 2px 5px #f14668"}}>
                Students</h1>
                <button
                        style={{marginLeft:"44%",height:"30px",marginTop:"10px",outline:"none",border:"none",width:"150px",color:"white",backgroundColor:"#f14668",borderRadius:"9px"}}
                        type="" data-toggle="modal" data-target="#exampleModalCenter">Add Student</button>
            
            {this.state.student.map((ob, index) => (
  <div
                            style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",padding:"20px",margin:"20px",backgroundColor:"white",height:"100px",borderRadius:"9px",display:"flex"}}>
                            <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}>
                                <h4 style={{marginTop:"10px",fontWeight:"300"}}>{ob.s_id}</h4>
                            </div>
                            <div style={{flex:"0.2",display:"flex",justifyContent:"center"}}>
                                <h4 style={{marginTop:"10px",fontWeight:"300"}}>{ob.name}</h4>
                            </div>
                            <div style={{flex:"0.3",display:"flex",justifyContent:"center"}}>
                                <h4 style={{marginTop:"10px",fontWeight:"300"}}>CGPA : {ob.cgpa}</h4>
                            </div>
                            <div onClick={()=>{this.handleDelete(ob.s_id)}} style={{flex:"0.2",display:"flex",justifyContent:"center"}}><button
                                    style={{height:"30px",marginTop:"10px",outline:"none",border:"none",width:"100px",color:"white",backgroundColor:"#f14668",borderRadius:"9px"}}
                                    type="">Remove</button></div>
            
                        </div>   
                        
                        
                        ))}
           
          
    
           
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add Student</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Roll No</label>
      <input onChange={(e)=>{
this.handleChange("s_id",e.target.value)
      }} type="email" class="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input  onChange={(e)=>{
this.handleChange("password",e.target.value)
      }} type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Phone Number</label>
    <input  onChange={(e)=>{
this.handleChange("phoneno",e.target.value)
      }} type="number" class="form-control" id="inputAddress" placeholder="eg. 8xxxxxx08" />
  </div>
  <div class="form-group">
    <label for="inputAddress">Current Semester</label>
    <input  onChange={(e)=>{
this.handleChange("curr_sem",e.target.value)
      }} type="number" class="form-control" id="inputAddress" placeholder="eg. 3" />
  </div>
  <div class="form-group">
    <label for="inputAddress">Name</label>
    <input  onChange={(e)=>{
this.handleChange("name",e.target.value)
      }} type="text" class="form-control" id="inputAddress" placeholder="eg. John" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Email</label>
    <input  onChange={(e)=>{
this.handleChange("email",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="xyz@gmail.com" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Batch. Id</label>
    <input  onChange={(e)=>{
this.handleChange("b_id",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="Batch Id" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Dept. Id</label>
    <input  onChange={(e)=>{
this.handleChange("dep_id",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="Dept Id" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem1</label>
    <input  onChange={(e)=>{
this.handleChange("s1_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem2</label>
    <input onChange={(e)=>{
this.handleChange("s2_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem3</label>
    <input onChange={(e)=>{
this.handleChange("s3_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem4</label>
    <input onChange={(e)=>{
this.handleChange("s4_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem5</label>
    <input onChange={(e)=>{
this.handleChange("s5_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem6</label>
    <input onChange={(e)=>{
this.handleChange("s6_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem7</label>
    <input onChange={(e)=>{
this.handleChange("s7_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem8</label>
    <input onChange={(e)=>{
this.handleChange("s8_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Final Check
      </label>
    </div>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button onClick={this.handleSubmit} type="button" class="btn btn-primary" data-dismiss="modal">Add student</button>
      </div>
    </div>
  </div>
</div>
        </div>:<div>
            <h1
                style={{textAlign:"center",fontWeight:"300",fontSize:"1.5rem",marginTop:"15px",textShadow: "2px 2px 5px #f14668"}}>
                No Students Yet</h1>
                <button
                        style={{marginLeft:"44%",height:"30px",marginTop:"10px",outline:"none",border:"none",width:"150px",color:"white",backgroundColor:"#f14668",borderRadius:"9px"}}
                        type="" data-toggle="modal" data-target="#exampleModalCenter">Add Student</button>
       
       <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add Student</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Roll No</label>
      <input onChange={(e)=>{
this.handleChange("s_id",e.target.value)
      }} type="email" class="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input  onChange={(e)=>{
this.handleChange("password",e.target.value)
      }} type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Phone Number</label>
    <input  onChange={(e)=>{
this.handleChange("phoneno",e.target.value)
      }} type="number" class="form-control" id="inputAddress" placeholder="eg. 8xxxxxx08" />
  </div>
  <div class="form-group">
    <label for="inputAddress">Current Semester</label>
    <input  onChange={(e)=>{
this.handleChange("curr_sem",e.target.value)
      }} type="number" class="form-control" id="inputAddress" placeholder="eg. 3" />
  </div>
  <div class="form-group">
    <label for="inputAddress">Name</label>
    <input  onChange={(e)=>{
this.handleChange("name",e.target.value)
      }} type="text" class="form-control" id="inputAddress" placeholder="eg. John" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Email</label>
    <input  onChange={(e)=>{
this.handleChange("email",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="xyz@gmail.com" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Batch. Id</label>
    <input  onChange={(e)=>{
this.handleChange("b_id",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="Batch Id" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Dept. Id</label>
    <input  onChange={(e)=>{
this.handleChange("dep_id",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="Dept Id" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem1</label>
    <input  onChange={(e)=>{
this.handleChange("s1_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem2</label>
    <input onChange={(e)=>{
this.handleChange("s2_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem3</label>
    <input onChange={(e)=>{
this.handleChange("s3_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem4</label>
    <input onChange={(e)=>{
this.handleChange("s4_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem5</label>
    <input onChange={(e)=>{
this.handleChange("s5_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem6</label>
    <input onChange={(e)=>{
this.handleChange("s6_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem7</label>
    <input onChange={(e)=>{
this.handleChange("s7_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sgpa for sem8</label>
    <input onChange={(e)=>{
this.handleChange("s8_sgpa",e.target.value)
      }} type="text" class="form-control" id="inputAddress2" placeholder="eg. 8.0" />
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Final Check
      </label>
    </div>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button onClick={this.handleSubmit} type="button" class="btn btn-primary" data-dismiss="modal">Add student</button>
      </div>
    </div>
  </div>
</div>
        </div>
        }
    </div>

</div>
);
}
}