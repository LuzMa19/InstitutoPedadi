import { Injectable } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private AlumnoCollection: AngularFirestoreCollection<any>;
  alumnos: Observable<any[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.AlumnoCollection = afs.collection<any>('alumnos');
    this.alumnos = this.AlumnoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
//recibedatosform

myForm = new FormGroup({
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
  tutor: new FormControl(''),
  sanguineo: new FormControl(''),
  domicilio: new FormControl(''),
  telefono: new FormControl(''),
  fecha: new FormControl(''),
})

getAlumnos() {
  return this.alumnos;
}

getAlumno(id:string){
  return this.AlumnoCollection.doc(id).valueChanges();

}
updateAlumnos(alumno: any , id: string) {
  return this.AlumnoCollection.doc(id).update(alumno)
}

deleteAlumno(id: string){
  return this.AlumnoCollection.doc(id).delete();
}
createAlumno(alumno: any){
  return this.AlumnoCollection.add(alumno);
}

}
