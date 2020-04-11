import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
 private fotosMaternal: foto[]=[
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/maternal2AD.jpg?alt=media&token=93152b1e-ebf2-4484-a01e-ae4a8052883b'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/maternal2G.jpg?alt=media&token=9ce54c7a-2d2a-4a70-9ed6-a84cce18c48b'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/maternal3G.jpg?alt=media&token=1b9264e1-f043-4eaa-ab6b-a178f34c9757'
   }
 ]
 private fotosPreescolar: foto[]=[
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/preescolar1G.jpg?alt=media&token=3792ce02-f33a-4228-bf48-d8e9c940212c'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/preescolar2G.jpg?alt=media&token=e720452b-5690-4bb2-b10f-ae0f421058da'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/preescolar3G.jpg?alt=media&token=2653afb3-7aa2-4162-8de1-2367ed03b395'
   }
 ]
 private fotosPrimaria: foto[]=[
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/primaria1G.jpg?alt=media&token=4d224f02-7644-4ea6-a60c-a5a26a91e0a5'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/primaria2G.jpg?alt=media&token=ef124400-ae55-4048-9fd7-df97dab44c59'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/primaria3G.jpg?alt=media&token=96de0971-e9c4-4b60-960b-59ba420ea706'
   }
 ]
 private fotosFeria: foto[]=[
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/feria1G.jpg?alt=media&token=6803d61a-7018-46b7-8ff4-4cc8c70e6ac9'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/feria2G.jpg?alt=media&token=b6b29d95-5ede-45e7-b2bc-e38cd0cc9736'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/feria3G.jpg?alt=media&token=7d32d914-e86b-45a6-890f-ec068377667c'
   }
 ]
 private fotosTaller: foto[]=[
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/taller1G.jpg?alt=media&token=01bf0eba-2d4e-4f3c-be33-eb0f78477af2'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/taller2G.jpg?alt=media&token=b2e722cb-8901-47c3-8df3-0baf4b887fa2'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/taller3G.jpg?alt=media&token=6c7c0cb9-ad4f-4042-a0f2-25f7aa581c65'
   }
 ]
 private fotosFestival: foto[]=[
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/festival1G.jpg?alt=media&token=059887e7-6aed-464b-a934-60832e44fd31'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/festival2G.jpg?alt=media&token=4cddecce-14c2-473e-b857-db3654cbf278'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/festival3G.jpg?alt=media&token=27ef3de2-0c52-4c86-b326-6d94a20c7593'
   }
 ]
 private fotosInstalaciones: foto[]=[
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/carrusel3.jpg?alt=media&token=7c8d377b-29fe-48c7-b80a-609200d5afce'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/instalacion4G.jpg?alt=media&token=cf3a8735-3bf1-40d3-ad7f-8f45a4369c18'
   },
   {
     link:'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/instalacion5G.jpg?alt=media&token=fb88eb96-eaf2-4754-9220-ac5e990a0d48'
   }
 ]

  constructor() {}
  getfotoMaternal():foto[]{
      return this.fotosMaternal;
  }
  getfotoPreescolar():foto[]{
    return this.fotosPreescolar;
  }
  getfotoPrimaria():foto[]{
    return this.fotosPrimaria;
  }
  getfotoFeria():foto[]{
    return this.fotosFeria;
  }
  getfotoTaller():foto[]{
    return this.fotosTaller;
  }
  getfotoFestival():foto[]{
    return this.fotosFestival;
  }
  getfotoInstalaciones():foto[]{
    return this.fotosInstalaciones;
  }
}
export interface foto{
  link: string;
}
