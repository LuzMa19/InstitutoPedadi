import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {adminModel} from '../../models/admin.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

declare let alertify: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
usuario: adminModel;


  constructor( private  auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new adminModel();

  }

  login(form: NgForm) {
    if(form.invalid){

      return;
    }
this.auth.login ( this.usuario).subscribe( resp =>{
alertify.success('Logeado correctamente');
this.router.navigateByUrl('/bienvenida')

}, err =>{
    alertify.error('Error al inciar sesión' + ' '+ err.error.error.message);
})
  }

}
