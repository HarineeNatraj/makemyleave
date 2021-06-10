import React, { Component } from 'react';
import Leftnav from '../leftnav/leftnav';
import Topnav from '../topnav/topnav';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import "./LeaveForm.css";
import {
MuiPickersUtilsProvider,
KeyboardTimePicker,
KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class LeaveForm extends Component {
state={
  r:null,
  ft:null,
  tt:null,
ftime:null,
ttime:null,
type:false,
option:null,
type_name:null,
fromDate:null,
response:null,
fDate:null,
toDate:null,
tDate:null,
fday:null,
tday:null,
selectedFile:null
}
onFileChange = event => {
    
  // Update the state
  this.setState({ selectedFile: event.target.files[0] });

};
onFileUpload = () => {
    
  // Create an object of formData
  const formData = new FormData();

  // Update the formData object
  formData.append(
    "myFile",
    this.state.selectedFile,
    this.state.selectedFile.name
  );

  // Details of the uploaded file
  console.log(this.state.selectedFile);

  // Request made to the backend api
  // Send formData object
  axios.post(`${process.env.REACT_APP_APILINK}/upload_doc`, formData);
};
handlereason=(e)=>{
this.setState({
response:e.target.value
})
}
componentDidMount(){
// document.getElementById("cat_button").click();
}
option=(e)=>{
this.setState({
option:e.target.value
})
}
handleOption=()=>{
console.log(this.state.option);
if(this.state.option==="1"||this.state.option==="2"||this.state.option==="3"){
this.setState({
type:true
})
if(this.state.option==="1"){
this.setState({
type_name:"Ordinary Leave"
})
}
if(this.state.option==="2"){
this.setState({
type_name:"Medical Leave"
})
}
if(this.state.option==="3"){
this.setState({
type_name:"On-Duty"
})
}
}
console.log(this.state.type);
}



handleDateChange=(date)=>{
  console.log(date);
const t=String(date);
console.log(t);
this.state.fday=t.slice(0,3)
console.log("Day",this.state.day);
const t1=t.slice(4,15);
console.log(t1);
this.setState({
fDate:t1
})
this.state.fromDate=t1;
this.state.fDate=t1;
console.log(this.state.fDate);
}

handletoChange=(date)=>{
  const t=String(date);
  this.state.tday=t.slice(0,3)
  this.setState({
    toDate:date
  })
  const t1=t.slice(4,15);
  this.state.toDate=t1;
  this.state.tDate=t1;
  console.log(this.state.tDate);
  }

handlefromtime=(date)=>{
  console.log(date);
this.setState({
ftime:date
})
const t=String(date);
  const t1=t.slice(16,24);
  this.state.ft=t1;
}

handletotime=(date)=>{
this.setState({
ttime:date
})
const t=String(date);
  const t1=t.slice(16,24);
  this.state.tt=t1;
}


handleSubmit=(e)=>{
e.preventDefault();
const rememberMe = localStorage.getItem('rememberMe') === 'true';
const name = rememberMe ? localStorage.getItem('name') : '';
console.log(this.state.tt)
console.log(this.state.ft)
console.log(this.state.fDate)
console.log(this.state.tDate)
console.log(this.state.response)
const a=null;
if(this.state.type_name==="Medical Leave"){
  this.state.r="ML"
}
if(this.state.type_name==="Ordinary Leave"){
  this.state.r="ordinary"

  }
  if(this.state.type_name==="On-Duty"){
    this.state.r="OD"

    }
if(this.state.tt && this.state.ft){
  axios.post(`${process.env.REACT_APP_APILINK}/enter_leave`,{s_id:name,type:this.state.r,fromTime:this.state.ft,fromDate:this.state.fDate,toDate:this.state.tDate,toTime:this.state.tt,reason:this.state.response,fday:this.state.fday,tday:this.state.tday})
  .then(res=>{
    if(res.data==="Sent"){
      toast.success("Leave has been applied successfully",{
        position: toast.POSITION.TOP_RIGHT, autoClose:3000});
    }
    if(res.data==="already"){
      toast.error("Leave already applied",{
        position: toast.POSITION.TOP_RIGHT, autoClose:3000});
    }
  })
}
else{
  axios.post(`${process.env.REACT_APP_APILINK}/enter_leave`,{s_id:name,type:this.state.r,fromDate:this.state.fDate,toDate:this.state.tDate,reason:this.state.response,fday:this.state.fday,tday:this.state.tday})
  .then(res=>{
    console.log(res.data);
    alert("Successfully applied")
  })
}
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
    this.state.type?<div>
      <h2 style={{textAlign:"center",marginTop:"10px", textShadow: "2px 2px 4px #5995fd"}}>{this.state.type_name}</h2>
      {
      this.state.type_name==="Ordinary Leave"?<div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid style={{flexDirection:"column",padding: "0 38%"}} container justify="center">
            <KeyboardDatePicker style={{margin: "30px 0px"}} id="date-picker-dialog" label="From Date"
              format="yyyy/MM/dd" value={this.state.fromDate} onChange={this.handleDateChange} minDate={new Date()}
              filterDate={date=> date.getDay() !== 6 && date.getDay()!==0}
              KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
              />
              <KeyboardDatePicker style={{margin: "30px 0px"}} id="date-picker-dialog" label="To Date"
                format="yyyy/MM/dd" value={this.state.toDate} onChange={this.handletoChange} minDate={new Date()}
                filterDate={date=> date.getDay() !== 6 && date.getDay()!==0}
                KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
                />
                <TextField style={{margin: "30px 0px",width:"354px"}} id="outlined-textarea" onChange={this.handlereason}
                  label="Reason for the Leave" placeholder="Type your reason here" multiline variant="outlined" />
                {/*
                <KeyboardTimePicker margin="normal" id="time-picker" label="Time picker" // value={selectedDate} //
                  onChange={handleDateChange} KeyboardButtonProps={{
            'aria-label': 'change time',
          }} /> */}
                 <button onClick={this.handleSubmit} className="header-button"
              style={{marginLeft:"40%",marginTop:"25px",marginBottom:"15px"}}>Apply Leave</button>
          </Grid>
        </MuiPickersUtilsProvider>
      </div>:<div>
        {
        this.state.type_name==="Medical Leave"?<div>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid style={{flexDirection:"column",padding: "0 38%"}} container justify="center">
                <KeyboardDatePicker style={{margin: "30px 0px"}} id="date-picker-dialog" label="From Date"
                  format="yyyy/MM/dd" value={this.state.fromDate} onChange={this.handleDateChange} minDate={new Date()}
                  filterDate={date=> date.getDay() !== 6 && date.getDay()!==0}
                  KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
                  />
                  <KeyboardDatePicker style={{margin: "30px 0px"}} id="date-picker-dialog" label="To Date"
                    format="yyyy/MM/dd" value={this.state.toDate} onChange={this.handletoChange} minDate={new Date()}
                    filterDate={date=> date.getDay() !== 6 && date.getDay()!==0}
                    KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
                    />
                    <TextField style={{margin: "30px 0px",width:"354px"}} id="outlined-textarea" onChange={this.handlereason}
                      label="Reason for the Leave" placeholder="Type your reason here" multiline variant="outlined" />
                    {/*
                    <KeyboardTimePicker margin="normal" id="time-picker" label="Time picker" // value={selectedDate} //
                      onChange={handleDateChange} KeyboardButtonProps={{
            'aria-label': 'change time',
          }} /> */}
          <div>
                <input type="file" onChange={this.onFileChange} />
                <button 
                className="header-button"
                onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
                     <button onClick={this.handleSubmit} className="header-button"
              style={{marginLeft:"40%",marginTop:"25px",marginBottom:"15px"}}>Apply Leave</button>
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </div>:<div>
          {
          this.state.type_name==="On-Duty"?<div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker style={{margin: "30px 0px"}} id="date-picker-dialog" label="From Date"
                  format="yyyy/MM/dd" value={this.state.fromDate} onChange={this.handleDateChange} minDate={new Date()}
                  filterDate={date=> date.getDay() !== 6 && date.getDay()!==0}
                  KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
                  />
                  <KeyboardTimePicker margin="normal" id="time-picker" label="From Time" value={this.state.ftime}
                    onChange={this.handlefromtime} KeyboardButtonProps={{
            'aria-label': 'change time',
          }} />
              </Grid>
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker style={{margin: "30px 0px"}} id="date-picker-dialog" label="To Date"
                  format="yyyy/MM/dd" value={this.state.toDate} onChange={this.handletoChange} minDate={new Date()}
                  filterDate={date=> date.getDay() !== 6 && date.getDay()!==0}
                  KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
                  />
                  <KeyboardTimePicker margin="normal" id="time-picker" label="To Time" value={this.state.ttime}
                    onChange={this.handletotime} KeyboardButtonProps={{
            'aria-label': 'change time',
          }} />
              </Grid>
            </MuiPickersUtilsProvider>
            <div>
              <TextField style={{marginTop:"64px",marginLeft:"34%",width:"354px"}} id="outlined-textarea" onChange={this.handlereason}
                label="Reason for the Leave" placeholder="Type your reason here" multiline variant="outlined" />
            </div>
            <div style={{marginTop:"64px",marginLeft:"34%",width:"354px"}}>
                <input type="file" onChange={this.onFileChange} />
                <button className="header-button"
                 onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
            <button onClick={this.handleSubmit} className="header-button"
              style={{marginLeft:"40%",marginTop:"25px",marginBottom:"15px"}}>Apply Leave</button>

          </div>:<div>
          </div>
          }
        </div>
        }
      </div>
      }

    </div>:
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
      <h1 style={{fontSize:"1rem",fontWeight:"200",textAlign:"center"}}>Please Select the Leave Category to further
        Proceed</h1>
      <button id="cat_button" type="button" class="btn btn-primary" data-toggle="modal"
        data-target="#exampleModalCenter">
        Select Leave Cateogory
      </button>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Leave Category</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <select onChange={this.option} value={this.state.option} class="custom-select custom-select-lg mb-3">
                <option selected>Leave Category</option>
                <option value="1">Ordinay Leave</option>
                <option value="2">Medical Leave</option>
                <option value="3">On-Duty</option>
              </select>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal"
                onClick={this.handleOption}>Continue</button>
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

export default LeaveForm;