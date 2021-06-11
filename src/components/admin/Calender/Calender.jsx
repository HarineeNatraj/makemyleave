import React, { Component } from 'react';
import Cframe from './cframe';
import Leftnav from '../admin-leftnav/leftnav';
import Topnav from '../admin-topnav/topnav';
export default class Cal extends Component {
    render() {
    return (
        <div style={{display:"flex"}}>
<div style={{flex:"0.1"}}>
<Leftnav />
</div>
<div style={{flex:"0.9"}}>
<Topnav />
<Cframe />
        
</div>
        </div>
       
    );
}
}