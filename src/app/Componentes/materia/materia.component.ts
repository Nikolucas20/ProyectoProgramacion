import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormLoginComponent } from '../Forms/form-login/form-login.component';
import { FormMateriaComponent } from '../Forms/form-materia/form-materia.component';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit{

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
  pagina = "Materia"

  mostrar(){
    this.api.Get('Materiums').then((res)=>{

      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]])
        
      }

      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadTable(data: any[]) {

    this.displayedColumns=[];
    for(let column in data[0]){
      this.displayedColumns.push(column);
    }
    this.displayedColumns.push('Acciones');
    console.log("this.displayedColumns");
  }

  ngOnInit(): void {

    // Realizar la llamada a la API y cargar los datos en la tabla

    this.api.Get("Materiums").then((res) => {
      this.loadTable(res);
      this.dataSource.data=res;

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    

  }

  editar(row: any) {
    // Aquí debes implementar la lógica para editar el elemento
    console.log('Editar', row);
  }
  
  eliminar(row: any) {
    // Aquí debes implementar la lógica para eliminar el elemento
    console.log('Eliminar', row.id);
    this.api.delete("Materiums",row.id).then((res)=>{
      console.log(res);
      
    })
  }

  openDialog(){
    this.dialog.open(FormMateriaComponent,{

    });
  }
}
