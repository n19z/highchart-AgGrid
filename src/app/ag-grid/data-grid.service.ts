import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataGridService {
  getAgGridData() {
    return this.http.get<[]>('https://api.mockaroo.com/api/0744f310?count=15&key=e8844b40')
  }
  constructor(private http: HttpClient) { }
}
