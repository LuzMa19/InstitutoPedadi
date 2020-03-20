import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private UsersCollection: AngularFirestoreCollection<any>;
  users: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.UsersCollection = afs.collection<any>('users');
    this.users = this.UsersCollection.snapshotChanges().pipe(
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
    telefono: new FormControl(''),
    correo: new FormControl(''),
    tipo: new FormControl(''),
    contrasenia: new FormControl(''),
    edad:new FormControl(''),
    fechan:new FormControl(''),
    ocupacion:new FormControl(''),
    domicilio:new FormControl(''),
  })

  getUsers() {
    return this.users;
  }

  getUser(id:string){
    return this.UsersCollection.doc(id).valueChanges();

 }
 getUserlogin(telefono:string){
   return this.UsersCollection.doc(telefono).valueChanges();

}

Login(telefono:string):Observable<any[]>{

    return this.afs.collection<any>('users', ref=> {
        let cursorQueryRef : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        //buscar nombre exacto:
        cursorQueryRef = cursorQueryRef.where('telefono', '==', telefono);
        //buscar letras iniciales:
        //----Falta construir---------
        return cursorQueryRef;
    })
    .snapshotChanges()
    .pipe(
        map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
        }))
    );

}


busquedaTutor():Observable<any[]>{

    return this.afs.collection<any>('users', ref=> {
        let cursorQueryRef : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        //buscar nombre exacto:
        cursorQueryRef = cursorQueryRef.where('tipo', '==', 'Tutor');
        //buscar letras iniciales:
        //----Falta construir---------
        return cursorQueryRef;
    })
    .snapshotChanges()
    .pipe(
        map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
        }))
    );

}







  updateUsers(user: any , id: string) {
    return this.UsersCollection.doc(id).update(user)
  }

  deleteUser(id: string){
    return this.UsersCollection.doc(id).delete();
  }
  createUser(user: any){
    return this.UsersCollection.add(user);
  }

}
