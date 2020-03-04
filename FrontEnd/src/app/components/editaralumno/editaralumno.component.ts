import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editaralumno',
  templateUrl: './editaralumno.component.html',
  styleUrls: ['./editaralumno.component.css']
})

export class EditaralumnoComponent implements OnInit {
//Esto oculta el modal
  //@ViewChild('closebutton') closebutton;
  //cerrarModal(){
    //this.closebutton.nativeElement.click();
  //}

  // solo eso
  dataAlumnos: any;
  dataAlumno: any;
  idAlumno:any;
  FormUpdate = new FormGroup({
    nombre: new FormControl(''),
    apellidopt: new FormControl(''),
    apellidomt: new FormControl(''),
    curp: new FormControl(''),
    fechan: new FormControl(''),
    edad: new FormControl(''),
    sexo: new FormControl(''),
    lugar: new FormControl(''),
    escuela: new FormControl(''),
    grado: new FormControl(''),
    alergias: new FormControl(''),
    cuidado: new FormControl(''),
    sanguineo: new FormControl(''),
    domicilio: new FormControl(''),
    telefono: new FormControl(''),
    fecha: new FormControl(''),
  });



  buscarAlumno(id: any) {
    console.log('el id es;', id)
    this.alumnoService.getAlumno(id).subscribe(list => {
      this.dataAlumno = list
      this.idAlumno = id;
      console.log(this.dataAlumno);
      this.FormUpdate = new FormGroup({
        nombre: new FormControl(this.dataAlumno.nombre),
        apellidopt: new FormControl(this.dataAlumno.apellidopt),
        apellidomt: new FormControl(this.dataAlumno.apellidomt),
        curp: new FormControl(this.dataAlumno.curp),
        fechan: new FormControl(this.dataAlumno.fechan),
        edad: new FormControl(this.dataAlumno.edad),
        sexo: new FormControl(this.dataAlumno.sexo),
        lugar: new FormControl(this.dataAlumno.lugar),
        escuela: new FormControl(this.dataAlumno.escuela),
        grado: new FormControl(this.dataAlumno.grado),
        alergias: new FormControl(this.dataAlumno.alergias),
        cuidado: new FormControl(this.dataAlumno.cuidado),
        sanguineo: new FormControl(this.dataAlumno.sanguineo),
        domicilio: new FormControl(this.dataAlumno.domicilio),
        telefono: new FormControl(this.dataAlumno.telefono),
        fecha: new FormControl(this.dataAlumno.fecha),
      })

    });
   }

   buscarAlumnoeliminar(id: any) {
     console.log('el id es;', id)
     this.alumnoService.getAlumno(id).subscribe(list => {
       this.dataAlumno = list
       this.idAlumno = id;
     });
     }


   actualizarAlumno(){
    console.log(this.FormUpdate.value)
    let data = this.FormUpdate.value;

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].value);
    }
    //actualizarUsuario
    this.alumnoService.updateAlumnos(data, this.idAlumno);
    this.FormUpdate.reset();
    //this.cerrarModal();
  }


  borrarAlumno(){
   //borrarUsuario
   //console.log('borrado',this.idUsuario)
   this.alumnoService.deleteAlumno(this.idAlumno);
   this.idAlumno="";

 }

  constructor(private alumnoService: AlumnoService) {
    this.alumnoService.getAlumnos().subscribe(list => {
      this.dataAlumnos = list;
      console.log(this.dataAlumnos);

    });

  }





  ngOnInit() {
  }

}
