import { Injectable } from '@angular/core';
import { CordinateInterface } from '../interfaces/i-coordinate';



@Injectable({
  providedIn: 'root'
})

export class DataChartService {

  cordinates: CordinateInterface[] = []

  getX1() {
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
  constructor() {

  }
}
