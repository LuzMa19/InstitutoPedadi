import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
declare let alertify: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataUsers: any;
  dataUser: any;
  encontrado: number;
  telefono: any;
  FormUpdate = new FormGroup({
    telefono: new FormControl(''),
    contrasenia: new FormControl(''),
  });


  buscarUsuario() {
    let data = this.usuarioService.myForm.value;
    console.log(data.telefono);
    console.log(data.contrasenia);
    this.usuarioService.Login(data.telefono).subscribe(list => {
      this.dataUser = list;
      if (this.dataUser.length == 0) {
        alertify.error('El usuario ingresado no existe');
      }else{
        if(data.contrasenia == this.dataUser[0].contrasenia){
          alertify.success('Logeado correctamente')
          this.router.navigate(['/bienvenida']);
        }
        else{
          alertify.error('La contraseña ingresada es incorrecta');

        }

      }
    })


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
  constructor(private usuarioService: UsuarioService,
    private router: Router,
) { }

  ngOnInit() {
  }

}
