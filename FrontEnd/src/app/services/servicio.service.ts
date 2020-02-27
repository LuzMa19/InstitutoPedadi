import { Injectable } from '@angular/core';
import { ServicioModel } from 'src/app/models/servicio.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private ServiciosColletion: AngularFirestoreCollection<any>;
 servicios: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.ServiciosColletion = afs.collection<any>(' servicios');
    this.servicios = this.ServiciosColletion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  //recibedatosform
  myForm = new FormGroup({
    descripcion: new FormControl(''),
    costo: new FormControl(''),
    tipo: new FormControl(''),
  })

  getServicios() {
    return this.servicios;
  }

  getUser(id:string){
    return this.ServiciosColletion.doc(id).valueChanges();

  }
  updateUsers(servicio: any , id: string) {
    return this.ServiciosColletion.doc(id).update(servicio)
  }

  deleteUser(id: string){
    return this.ServiciosColletion.doc(id).delete();
  }
  createUser(servicio: any){
    return this.ServiciosColletion.add(servicio);
  }


}
