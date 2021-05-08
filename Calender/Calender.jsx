import React, { Component } from 'react';
import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule';

import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import Leftnav from '../leftnav/leftnav';
import Topnav from '../topnav/topnav';
export default class Cal extends Component {
    render() {
    return (
        <div style={{display:"flex"}}>
<div style={{flex:"0.1"}}>
<Leftnav />
</div>
<div style={{flex:"0.9"}}>
<Topnav />
<ScheduleComponent currentView='Week'>
            <ViewsDirective>
                <ViewDirective option='Week' />
                <ViewDirective option='Month' />
            </ViewsDirective>
            <Inject services={[Week,Month]} />
        </ScheduleComponent>
        
</div>
        </div>
       
    );
}
}