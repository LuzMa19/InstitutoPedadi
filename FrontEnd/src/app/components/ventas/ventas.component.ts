import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { UsuarioService } from '../../services/usuario.service';
import {AlumnoService} from '../../services/alumno.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  busquedaHijo(nombrePapa){
    console.log(nombrePapa)
  }
  dataUsers: any;
  dataAlumnos: any;
  dataServicios: any;
  constructor(private usuarioService: UsuarioService,
  private alumnoService: AlumnoService, private servicioService: ServicioService ) {
  }


  ngOnInit() {
    this.usuarioService.busquedaTutor().subscribe(list => {
      this.dataUsers = list;
      console.log(this.dataUsers);
    });
    this.alumnoService.getAlumnos().subscribe(list => {
      this.dataAlumnos = list;
      console.log(this.dataAlumnos);
    });
    this.servicioService.getServicios().subscribe(list => {
      this.dataServicios = list;
      console.log(this.dataServicios);
    });
  }

}
