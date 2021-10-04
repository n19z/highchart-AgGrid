import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface CordinateInterface {
  x1: number
  x2: number
  x3: number
  id?: any
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  cordinates: CordinateInterface[] = []

  getX1() {
      console.log(this.cordinates.map(i => i.x1));
      
    return this.cordinates.map(i => i.x1)
  }

  getX2 () {
    return this.cordinates.map(i => i.x2)
 }
  getX3() {
    return this.cordinates.map(i => i.x3)
}

  getArray() {
    return [1, 2, 3, 4, 5]
  }

  getChartData() {
    this.http.get<CordinateInterface[]>('https://api.mockaroo.com/api/50ef5af0?count=20&key=e8844b40')
      .subscribe(response => {
        this.cordinates = response
      })
  }

  getAgGridData() {
    return this.http.get<any[]>('https://api.mockaroo.com/api/0744f310?count=15&key=e8844b40')
  }

  constructor(private http: HttpClient) {
    this.getChartData()
  }
}
