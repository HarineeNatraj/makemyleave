import React from 'react';
import {Line,Chart,Bar} from 'react-chartjs-2';



export default class App extends React.Component {
  render() {
    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
       draw: function() {
           draw.apply(this, arguments);
           let ctx = this.chart.chart.ctx;
           let _stroke = ctx.stroke;
           ctx.stroke = function() {
               ctx.save();
               ctx.shadowColor = 'black';
               ctx.shadowBlur = 20;
               ctx.shadowOffsetX = 0;
               ctx.shadowOffsetY = 20;
               _stroke.apply(this, arguments)
               ctx.restore();
           }
       }
    });
    const getData = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, '#3C64AB');   
      gradient.addColorStop(1, '#eeeeee');

      return {
          labels: this.props.xaxis,
          datasets: [
              {
                label:this.props.label,
                fill:false,
                  backgroundColor : gradient, // Put the gradient here as a fill color
                  borderColor : this.props.color,
                  borderWidth: 5,
                  pointRadius: 3,
                  pointHoverRadius: 10,
                   pointBackgroundColor: this.props.color,
                   pointHoverBackgroundColor: this.props.hover,
                   pointHoverBorderColor: "black",
                  data : this.props.xdata
              }
          ]
      }
  }

    const canvas = document.createElement('canvas');
    const state = getData(canvas);
    return (
      <div>
        <Line
          data={state}
          options={{
            tooltips: {
                mode: 'index',
                intersect: false
             },
              hover: {
                mode: 'index',
                intersect: false,
            onHover: function(e) {
               var point = this.getElementAtEvent(e);
               if (point.length) e.target.style.cursor = 'pointer';
               else e.target.style.cursor = 'default';
            }},
         responsive:true,
               legend: {
                   labels: {
                     display:false,
                     padding:30,
                       fontColor: "grey",
                       fontSize: 18
                   }
               },
            scales: {
              xAxes: [{
                 offset: true,
                ticks: {
                  display: true,
                      fontColor: "grey"
                    },
       
               scaleLabel: {
                 display: true,
                 labelString: 'Semester',
                  fontColor: 'grey',
                  fontSize:18
               },
                  gridLines: {
                    drawBorder:false,
                    display:false,
                    borderDash: [5, 15],
                              color: "#393e46"
       
                  }
               }],
               yAxes: [{
                 ticks:{
                  max:10,
                  min:this.props.min,
                  step:2,
                   fontColor: 'grey',
                   display:false
                },
                 stacked: true,
                  offset: true,
                 gridLines: {
                   display:true,
                   borderDash: [5, 30],
                   color: "#bbbbbb"
                 },
                 scaleLabel: {
                   fontColor: 'grey',
            fontSize: 18,
             labelString: 'Case number'
           },
               }]
            }
          }}
        />
      </div>
    );
  }
}
