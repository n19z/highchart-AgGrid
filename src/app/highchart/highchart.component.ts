import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CordinateInterface } from './i-coordinate';


@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.sass']
})
export class HighchartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts
  updateFlag = false

  cordinates: CordinateInterface[] = []
  chartOptions: Highcharts.Options = {
    series: [
      {
        name: "Ufa",
        type: "line",
        data: []
      },
      {
        name: "Moscow",
        type: "line",
        data: []
      },
      {
        name: "Kazan",
        type: "line",
        data: []
      },
    ],
    title: { text: 'Temperature' },
    yAxis: {
      title: { text: 'Celsius' }
    },
    xAxis: {
      tickInterval: 1,
      title: { text: 'middle Weather' }
    },
    plotOptions: {
      series: {
        pointStart: 2001,
        pointInterval: 1
      }
    }
  };

  constructor(public http: HttpClient) {

    this.http.get<CordinateInterface[]>('https://api.mockaroo.com/api/50ef5af0?count=20&key=e8844b40')
      .subscribe(response => {
        this.chartOptions.series =
          [{
            name: "Ufa",
            type: "spline",
            data: response.map(x => x.x1)
          },
          {
            name: "Moscow",
            type: "spline",
            data: response.map(x => x.x2)
          },
          {
            name: "Kazan",
            type: "spline",
            data: response.map(x => x.x3)
          }]
          this.updateFlag = true;
      })
  }


  ngOnInit(): void { }
}
