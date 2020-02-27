import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {ModeloComponent} from './components/modelo/modelo.component';
import {GaleriaComponent} from './components/galeria/galeria.component';
import {LoginComponent} from './components/login/login.component';
import {RegistroComponent} from './components/registro/registro.component';
import {EditarusuarioComponent} from './components/editarusuario/editarusuario.component';
import {BienvenidaComponent} from './components/bienvenida/bienvenida.component';
import  {RegistroalumnoComponent} from './components/registroalumno/registroalumno.component';
import {ServicioComponent} from './components/servicio/servicio.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'modelo', component: ModeloComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'edicion', component: EditarusuarioComponent },
  { path: 'registroalumno', component: RegistroalumnoComponent },
  { path: 'servicio', component: ServicioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
