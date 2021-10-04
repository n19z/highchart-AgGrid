import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { HighchartsChartModule } from 'highcharts-angular'
import { HighchartComponent } from './highchart/highchart.component'


import { AppComponent } from './app.component'

import { AgGridModule } from 'ag-grid-angular'
import { AgGridComponent } from './ag-grid/ag-grid.component'

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HighchartComponent,
    AgGridComponent
    
  ],
  imports: [
    BrowserModule,  
    AgGridModule.withComponents([]),
    HighchartsChartModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
