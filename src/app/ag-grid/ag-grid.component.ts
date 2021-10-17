import { Component } from '@angular/core'
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DataGridService } from './data-grid.service';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.sass']
})
export class AgGridComponent {


  columnDefs: ColDef[] = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Имя', field: 'first_name' },
    { headerName: 'Фамилия', field: 'last_name' },
    { headerName: 'Почта', field: 'email' },
    { headerName: 'Пол', field: 'gender' },
    { headerName: 'Судимости', field: 'adult', resizable: false }
  ];



  defaultColDef = {
    resizable: true,
    flex: 1
  }

  rowData: Observable<any[]>


  constructor(public data: DataGridService) {
    this.rowData = this.data.getAgGridData()
  }


}



