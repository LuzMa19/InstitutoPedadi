import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../../services/alumno.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registroalumno',
  templateUrl: './registroalumno.component.html',
  styleUrls: ['./registroalumno.component.css']
})
export class RegistroalumnoComponent implements OnInit {
  dataUsers: any;

  constructor(private alumnoService: AlumnoService, private usuarioService: UsuarioService) {
  }
  addAlumno(){
   console.log("Hola");
   console.log(this.alumnoService.myForm.value)
   let data = this.alumnoService.myForm.value;
   data.contrasenia=12345;
   //insercion a la base de datos
   this.alumnoService.createAlumno(data);
   this.alumnoService.myForm.reset();
    }
  ngOnInit() {
    this.usuarioService.busquedaTutor().subscribe(list => {
      this.dataUsers = list;
      console.log(this.dataUsers);
    });
  }

}
