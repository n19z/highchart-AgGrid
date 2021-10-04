import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'
import { HighchartsChartModule } from 'highcharts-angular'
import { HighchartComponent } from './highchart/highchart.component'

import { DataService } from './services/data.service'
import { AppComponent } from './app.component'

import { AgGridModule } from 'ag-grid-angular'
import { AgGridComponent } from './ag-grid/ag-grid.component'

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    HighchartComponent
  ],
  imports: [
    BrowserModule,  
    AgGridModule.withComponents([]),
    HttpClientModule,
    HighchartsChartModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]

})
export class AppModule { }
