import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})

export class EditarusuarioComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  cerrarModal(){
    this.closebutton.nativeElement.click();
  }
  dataUsers: any;
  dataUser: any;
  idUsuario:any;
  FormUpdate = new FormGroup({
    nombre: new FormControl(''),
    apellidopt: new FormControl(''),
    apellidomt: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    tipo: new FormControl(''),
    edad:new FormControl(''),
    ocupacion:new FormControl(''),
    domicilio:new FormControl(''),
  });



  buscarUsuario(id: any) {
    console.log('el id es;', id)
    this.usuarioService.getUser(id).subscribe(list => {
      this.dataUser = list
      this.idUsuario = id;
      console.log(this.dataUser);
      this.FormUpdate = new FormGroup({
        nombre: new FormControl(this.dataUser.nombre),
        apellidopt: new FormControl(this.dataUser.apellidopt),
        apellidomt: new FormControl(this.dataUser.apellidomt),
        telefono: new FormControl(this.dataUser.telefono),
        correo: new FormControl(this.dataUser.correo),
        tipo: new FormControl(this.dataUser.tipo),
        edad:new FormControl(this.dataUser.edad),
        ocupacion:new FormControl(this.dataUser.ocupacion),
        domicilio:new FormControl(this.dataUser.domicilio),
      })

    });
   }

   buscarUsuarioeliminar(id: any) {
     console.log('el id es;', id)
     this.usuarioService.getUser(id).subscribe(list => {
       this.dataUser = list
       this.idUsuario = id;
     });
     }


   actualizarUsuario(){
    console.log(this.FormUpdate.value)
    let data = this.FormUpdate.value;

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].value);
    }
    //actualizarUsuario
    this.usuarioService.updateUsers(data, this.idUsuario);
    this.FormUpdate.reset();
    this.cerrarModal();
  }
  borrarUsuario(){
   //borrarUsuario
   //console.log('borrado',this.idUsuario)
   this.usuarioService.deleteUser(this.idUsuario);
   this.idUsuario="";

 }

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.getUsers().subscribe(list => {
      this.dataUsers = list;
      console.log(this.dataUsers);

    });

  }





  ngOnInit() {
  }

}
