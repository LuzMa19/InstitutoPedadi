import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataUsers: any;
  dataUser: any;
  telefono: any;
  FormUpdate = new FormGroup({
    telefono: new FormControl(''),
    contrasenia: new FormControl(''),
  });


  buscarUsuario() {
    console.log('Dame mas clic');
    console.log('el telefono es;', this.usuarioService.myForm)
    /*this.usuarioService.getUser(telefono).subscribe(list => {
      this.dataUser = list
      this.telefono = telefono;
      console.log(this.dataUser);
      this.FormUpdate = new FormGroup({
        telefono: new FormControl(this.dataUser.telefono),
        contrasenia: new FormControl(this.dataUser.contrasenia),
      });


    });
    */
  }
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
