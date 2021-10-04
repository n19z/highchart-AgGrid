import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.sass']
})
export class HighchartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;


  constructor(public data: DataService) {
    setTimeout(() => {
      this.chartOptions = {
        series: [
          {
            name: "Ufa",
            type: "line",
            data: data.getX1()
          },
          {
            name: "Moscow",
            type: "line",
            data: data.getX2()
          },
          {
            name: "New-York",
            type: "line",
            data: data.getX3()
          }
        ],
        
        title: {
          text: 'Temperature'
        },

        yAxis: {
          title: {
            text: 'Celsius'
          }
        },

        xAxis: {
          tickInterval: 1,
          title: {
            text: 'middle Weather'
          }
        },

        plotOptions: {
          series: {
            pointStart: 2001,
            pointInterval: 1
          }

        }
      }
    }, 2000)

  }

  ngOnInit(): void {}

}
