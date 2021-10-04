import { Component, OnInit } from '@angular/core'
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.sass']
})
export class HighchartComponent implements OnInit{

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Ufa",
          type: "line",
          data: [1, 2, 3, 4, 5]
        }
      ]
    }

  }

  ngOnInit() {

  }
}
