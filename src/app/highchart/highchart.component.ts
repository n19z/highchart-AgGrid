import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CordinateInterface } from '../interfaces/i-coordinate';
import { DataChartService } from '../services/data-chart.service';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.sass']
})
export class HighchartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  cordinates: CordinateInterface[] = []

  constructor(
    public data: DataChartService,
    public http: HttpClient
    ) {

   this.http.get<CordinateInterface[]>('https://api.mockaroo.com/api/50ef5af0?count=20&key=e8844b40')
      .subscribe(response => {
        this.cordinates = response
      })
      
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

  ngOnInit(): void { }

}
