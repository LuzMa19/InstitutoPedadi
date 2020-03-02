import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editarservicio',
  templateUrl: './editarservicio.component.html',
  styleUrls: ['./editarservicio.component.css']
})

export class EditarservicioComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  cerrarModal(){
    this.closebutton.nativeElement.click();
  }
  dataServicios: any;
  dataServicio: any;
  idServicio:any;
  FormUpdate = new FormGroup({
    descripcion: new FormControl(''),
    costo: new FormControl(''),
    tipo: new FormControl(''),
  });



  buscarServicio(id: any) {
    console.log('el id es;', id)
    this.servicioService.getServicio(id).subscribe(list => {
      this.dataServicio = list
      this.idServicio = id;
      console.log(this.dataServicio);
      this.FormUpdate = new FormGroup({
        descripcion: new FormControl(this.dataServicio.descripcion),
        costo: new FormControl(this.dataServicio.costo),
        tipo: new FormControl(this.dataServicio.tipo),
      })

    });
   }

   buscarServicioeliminar(id: any) {
     console.log('el id es;', id)
     this.servicioService.getServicio(id).subscribe(list => {
       this.dataServicio = list
       this.idServicio = id;
     });
     }


   actualizarServicio(){
    console.log(this.FormUpdate.value)
    let data = this.FormUpdate.value;

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].value);
    }
    //actualizarUsuario
    this.servicioService.updateServicio(data, this.idServicio);
    this.FormUpdate.reset();
    this.cerrarModal();
  }
  borrarServicio(){
   //borrarUsuario
   //console.log('borrado',this.idUsuario)
   this.servicioService.deleteServicio(this.idServicio);
   this.idServicio="";

 }

  constructor(private servicioService: ServicioService) {
    this.servicioService.getServicios().subscribe(list => {
      this.dataServicios = list;
      console.log(this.dataServicios);

    });

  }





  ngOnInit() {
  }

}
