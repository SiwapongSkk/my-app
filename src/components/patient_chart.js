import React, { Component } from 'react';
import axios from 'axios';

import Chart from './Chart';

export default class Patient_chart extends Component{

    constructor(){
        super();
        this.state = {
          chartData:{}
        }
      }
    
      componentWillMount(){
       // this.getchartData(); // this should be this.getChartData();
        this.getChartData();
      }
    
      getChartData(){
        // Ajax calls here
        this.setState({
          chartData:{
            labels: ['21/8/2563', '22/8/2563', '23/8/2563', '24/8/2563', '25/8/2563', '26/8/2563','Today : 27/8/2563'],
            datasets:[
              {
                label:'Population',
                data:[
                    90,
                    76,
                    95,
                    115,
                    99,
                    80,
                    86
                ],
                backgroundColor:[
                  'rgba(3, 173, 184, 1.0)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              },
              {
                label:'Population',
                data:[
                    120,
                    140,
                    143,
                    155,
                    180,
                    160,
                    156
                ],
                backgroundColor:[
                  'rgba(255, 204, 0, 1.0)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        });
      }

    render(){
        return(
            <div>
                <h3>Patient_chart</h3>
                <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
                
            </div>
        )
    }


}