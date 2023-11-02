import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ApiService } from 'src/app/Services/api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormAlumnosComponent } from '../Forms/form-alumnos/form-alumnos.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent implements OnInit{

  /**
   *
   */
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  constructor(public api: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  pagina = "Alumnos"

  
  ngOnInit(): void {
    this.api.Get('Alumnos').then((res)=>{

      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]])
        
      }

      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  loadTable(data:any[]){
    this.displayedColumns=[];
    for(let column in data[0]){
      this.displayedColumns.push(column);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(FormAlumnosComponent,{

    });
  }

}
