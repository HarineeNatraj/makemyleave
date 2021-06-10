import React, { Component } from 'react'
import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule';
import axios from 'axios';

import "../../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
export class Cframe extends Component {

   state={
    data:[
        {
            id:1,
            Subject:null,
            StartTime: new Date(2018, 0, 15, 9, 0),
            EndTime: new Date(2018, 0, 15, 10,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:2,
            Subject:null,
            StartTime: new Date(2018, 0, 15, 10, 0),
            EndTime: new Date(2018, 0, 15, 11,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:3,
            Subject:null,
            StartTime: new Date(2018, 0, 15, 11, 20),
            EndTime: new Date(2018, 0, 15, 12,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:4,
            Subject:null,
            StartTime: new Date(2018, 0, 15, 12, 20),
            EndTime: new Date(2018, 0, 15, 1,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:5,
            Subject:null,
            StartTime: new Date(2018, 0, 15, 14, 30),
            EndTime: new Date(2018, 0, 15, 15,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:6,
            Subject:null,
            StartTime: new Date(2018, 0, 15, 15, 30),
            EndTime: new Date(2018, 0, 15, 16,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        ////monday//////////
        {
            id:7,
            Subject:null,
            StartTime: new Date(2018, 0, 16, 9, 0),
            EndTime: new Date(2018, 0, 16, 10,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:8,
            Subject:null,
            StartTime: new Date(2018, 0, 16, 10, 0),
            EndTime: new Date(2018, 0, 16, 11,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:9,
            Subject:null,
            StartTime: new Date(2018, 0, 16, 11, 20),
            EndTime: new Date(2018, 0, 16, 12,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:10,
            Subject:null,
            StartTime: new Date(2018, 0, 16, 12, 20),
            EndTime: new Date(2018, 0, 16, 1,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:11,
            Subject:null,
            StartTime: new Date(2018, 0, 16, 14, 30),
            EndTime: new Date(2018, 0, 16, 15,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:12,
            Subject:null,
            StartTime: new Date(2018, 0, 16, 15, 30),
            EndTime: new Date(2018, 0, 16, 16,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        //////// tuesday
        {
            id:13,
            Subject:null,
            StartTime: new Date(2018, 0, 17, 9, 0),
            EndTime: new Date(2018, 0, 17, 10,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:14,
            Subject:null,
            StartTime: new Date(2018, 0, 17, 10, 0),
            EndTime: new Date(2018, 0, 17, 11,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:15,
            Subject:null,
            StartTime: new Date(2018, 0, 17, 11, 20),
            EndTime: new Date(2018, 0, 17, 12,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:16,
            Subject:null,
            StartTime: new Date(2018, 0, 17, 12, 20),
            EndTime: new Date(2018, 0, 17, 1,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:17,
            Subject:null,
            StartTime: new Date(2018, 0, 17, 14, 30),
            EndTime: new Date(2018, 0, 17, 15,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:18,
            Subject:null,
            StartTime: new Date(2018, 0, 17, 15, 30),
            EndTime: new Date(2018, 0, 17, 16,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        //////// wednesday
        {
            id:19,
            Subject:null,
            StartTime: new Date(2018, 0, 18, 9, 0),
            EndTime: new Date(2018, 0, 18, 10,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:20,
            Subject:null,
            StartTime: new Date(2018, 0, 18, 10, 0),
            EndTime: new Date(2018, 0, 18, 11,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:21,
            Subject:null,
            StartTime: new Date(2018, 0, 18, 11, 20),
            EndTime: new Date(2018, 0, 18, 12,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:22,
            Subject:null,
            StartTime: new Date(2018, 0, 18, 12, 20),
            EndTime: new Date(2018, 0, 18, 1,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:23,
            Subject:null,
            StartTime: new Date(2018, 0, 18, 14, 30),
            EndTime: new Date(2018, 0, 18, 15,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:24,
            Subject:null,
            StartTime: new Date(2018, 0, 18, 15, 30),
            EndTime: new Date(2018, 0, 18, 16,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        ////////////thursday
        {
            id:25,
            Subject:null,
            StartTime: new Date(2018, 0, 19, 9, 0),
            EndTime: new Date(2018, 0, 19, 10,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:26,
            Subject:null,
            StartTime: new Date(2018, 0, 19, 10, 0),
            EndTime: new Date(2018, 0, 19, 11,0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:27,
            Subject:null,
            StartTime: new Date(2018, 0, 19, 11, 20),
            EndTime: new Date(2018, 0, 19, 12,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:28,
            Subject:null,
            StartTime: new Date(2018, 0, 19, 12, 20),
            EndTime: new Date(2018, 0, 19, 1,20),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:29,
            Subject:null,
            StartTime: new Date(2018, 0, 19, 14, 30),
            EndTime: new Date(2018, 0, 19, 15,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            id:30,
            Subject:null,
            StartTime: new Date(2018, 0, 19, 15, 30),
            EndTime: new Date(2018, 0, 19, 16,30),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        
    ]
}   

    componentDidMount(){
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const name = rememberMe ? localStorage.getItem('name') : '';
        axios.post(`${process.env.REACT_APP_APILINK}/show_tt_mon`,{
                            type:"admin",
                            id:name,
                        })
                        .then(res=>{
                            console.log(res.data);
                            // var t=0
                            res.data.map((ob,index)=>{
                               var t=this.state.data[index]
                               t.Subject=ob.c_id
                               this.state.data[index]=t
                            })
                        })
                        axios.post(`${process.env.REACT_APP_APILINK}/course_list`,{a_id:name})
                        .then(res=>{
                            var c={}
                            console.log(res.data);
                            res.data.map((ob, index) => {
                                c[ob.c_id]=ob.c_name
                                            })
                                        this.setState({
                                            c_list:c
                                        })
                                        console.log(this.state.clist);
                        })
    }
    render() {
        return (
            <div>
                <ScheduleComponent currentView='Week' eventSettings={{ dataSource: this.state.data }}>
            <ViewsDirective>
                <ViewDirective option='Week' />
                <ViewDirective option='Month' />
            </ViewsDirective>
            <Inject services={[Week,Month]} />
        </ScheduleComponent>
            </div>
        )
    }
}

export default Cframe
