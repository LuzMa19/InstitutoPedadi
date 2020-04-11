import { Component, OnInit } from '@angular/core';
import {adminModel} from '../../models/admin.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

declare let alertify: any;

@Component({
  selector: 'app-registroadmin',
  templateUrl: './registroadmin.component.html',
  styleUrls: ['./registroadmin.component.css']
})
export class RegistroadminComponent implements OnInit {
 usuario: adminModel;
  constructor( private auth:AuthService) { }

  ngOnInit() {
    this.usuario = new adminModel();
  }
onSubmit( form: NgForm){
  if(form.invalid) {
    return;
  }
this.auth.nuevoUsuario(this.usuario).subscribe( resp=> {
  alertify.success('Creado exitosamente');

}, (err) => {
  alertify.error('Error al registrar' + ' '+ err.error.error.message);
})
}
}
