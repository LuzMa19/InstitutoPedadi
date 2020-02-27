import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../../services/servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  constructor(private servicioService: ServicioService) {

   }
   addServicio(){
    console.log("Hola");
    console.log(this.servicioService.myForm.value)
    let data = this.servicioService.myForm.value;
    data.contrasenia=12345;
    //insercion a la base de datos
    this.servicioService.createUser(data);
    this.servicioService.myForm.reset();
  }

  ngOnInit() {
  }

}
