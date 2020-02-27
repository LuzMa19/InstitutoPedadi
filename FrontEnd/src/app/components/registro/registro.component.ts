import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  constructor(private usuarioService: UsuarioService) {

   }
    addUsuario(){
     console.log("Hola");
     console.log(this.usuarioService.myForm.value)
     let data = this.usuarioService.myForm.value;
     data.contrasenia=12345;
     //insercion a la base de datos
     this.usuarioService.createUser(data);
     this.usuarioService.myForm.reset();
   }

  ngOnInit() {
  }

}
