import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private equipoPedadi: TeamPedadi[] = [
      {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/personal1A.jpg?alt=media&token=68cafbd8-603e-4201-985f-01971095b785',
        nombre: 'L.C.E. Karina Salinas Sánchez',
        puesto: 'Directora General',
        descripcion: 'Me dedico a impulsar una educación de calidad con enfoque empresarial para las generaciones infantiles y juveniles del estado de Oaxaca, dando el acompañamiento requerido para que los emprendedores logren alcanzar sus sueños y sean los gestores de un equilibrio social.'
      },
      {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/personal2A.jpg?alt=media&token=0603ef7d-005c-4768-9be5-2ff2f5f7f881',
        nombre: 'L.C.E. Higinio Salinas Sánchez',
        puesto: 'Director Nivel Primaria',
        descripcion: 'Los emprendedores son los agentes de cambio en una sociedad. Para ser emprendedor debes encontrar cuál es tu pasión. Mi pasión es formar a los nuevos líderes empresariales. Soy emprendedor para vivir en equilibrio.'
      },
      {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/personal3A.jpg?alt=media&token=1a0df693-1a9f-41f1-8cb9-4bd54a5f1869',
        nombre: 'C.P. Jassive Maty Cruz Olayo',
        puesto: 'Jefa de Depto. Servicios Escolares',
        descripcion: 'Me gusta escuchar los deseos y necesidades de los padres de familia para poder ofrecer y diseñar un servicio educativo de excelencia, que brinden un estilo de vida confortable, que se adapte perfectamente a las necesidades de  cada familia.'
      },
      {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/personal4A.jpg?alt=media&token=2d934a8e-62d8-4fc2-9a61-6f8a14ecad06',
        nombre: 'L.C.E. Lucía Cruz Reyes',
        puesto: 'Docente',
        descripcion: 'Me desempeño de manera creativa, responsable y comprometida con mis estudiantes, conduciéndolos hacia un nuevo modelo educativo emprendedor y al desarrollo de los ODS.'
      },
      {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/personal5A.jpg?alt=media&token=b5ce7b32-ead8-4a76-a6da-8b8ee1b4dee3',
        nombre: 'L.C.E. Shenny Viridiana Pérez Robles',
        puesto: 'Docente',
        descripcion: 'Soy una maestra que descubre, aprovecha e impulsa las potencialidades de cada estudiante para que sean grandes emprendedores, mediante un aprendizaje lúdico basado en el desarrollo de negocios.'
      },
      {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/personal6A.jpg?alt=media&token=2e1bf052-33a1-41e2-bfad-fe00a67ab2fb',
        nombre: 'L.C.E. Roxana Mariela Reyes Villalobos',
        puesto: 'Docente',
        descripcion: 'Soy una maestra comprometida con el tema del emprendimiento, conduciendo a mis estudiantes a un aprendizaje significactivo, formándolos como futuros emprendedores responsables con la sociedad y el ambiente.'
      },
      {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/personal7A.jpg?alt=media&token=04a5e7fa-1344-4122-b4d9-8c787ec6adec',
        nombre: 'L.C.E. Edith Vásquez Ramírez',
        puesto: 'Docente',
        descripcion: 'Me dedico a impartir clases en educación básica, con un enfoque humanista y un compromiso personal, social y profesional, con el firme objetivo por mejorar la educación en nuestro estado y país.'
      },
      {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/personal8A.jpg?alt=media&token=efdd12fa-8d27-4cac-bba9-8c5399e82ae0',
        nombre: 'L.E.I. Victor E. Delgado Morales ',
        puesto: 'Docente de Inglés',
        descripcion: 'Soy un docente comprometido con la enseñanza-aprendizaje de una segunda lengua, respondiendo a las necesidades de los estudiantes, así como la sociedad. Siempre innovando la labor de la enseñanza en el área de inglés para hacer una clase más llamativa.'
      },
      {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/personal9A.jpg?alt=media&token=31353a96-50c6-43ef-991d-333028c2626c',
        nombre: 'L.S.C. Liliana Soledad Santiago López',
        puesto: 'Docente de Computación',
        descripcion: 'Como ingeniera en sistemas computacionales mi formación académica, humana y laboral se enfoca en la enseñanza, desarrollo e implementación de herramientas digitales que permitan a las nuevas generaciones a desenvolverse en cualquier ámbito.'
      }

    ];

  constructor() { }
  getTeamPedadi(): TeamPedadi[] {
    return this.equipoPedadi;
  }
}
export interface TeamPedadi {
  imagen: string;
  nombre: string;
  puesto: string;
  descripcion: string;
}
