import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {ModeloComponent} from './components/modelo/modelo.component';
import {GaleriaComponent} from './components/galeria/galeria.component';
import {LoginComponent} from './components/login/login.component';
import {BienvenidaComponent} from './components/bienvenida/bienvenida.component';
import {RegistroComponent} from './components/registro/registro.component';
import {RegistroalumnoComponent} from './components/registroalumno/registroalumno.component';
import {ServicioComponent} from './components/servicio/servicio.component';
import {EditarusuarioComponent} from './components/editarusuario/editarusuario.component';
import {EditaralumnoComponent} from './components/editaralumno/editaralumno.component';
import {EditarservicioComponent} from './components/editarservicio/editarservicio.component';
import {AdmisionComponent} from './components/admision/admision.component';
import {VentasComponent} from './components/ventas/ventas.component';
import {RegistroadminComponent} from './components/registroadmin/registroadmin.component';
import { AuthGuard } from './guards/auth.guard';




const APP_ROUTES: Routes = [
  { path: 'Inicio', component: HomeComponent },
  { path: 'Nosotros', component: AboutComponent },
  { path: 'Modelo', component: ModeloComponent },
  { path: 'Galeria', component: GaleriaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Contacto', component: ContactoComponent },
  { path: 'registro', component: RegistroComponent,canActivate: [AuthGuard]  },
  { path: 'bienvenida', component: BienvenidaComponent,canActivate: [AuthGuard] },
  { path: 'edicion', component: EditarusuarioComponent,canActivate: [AuthGuard] },
  { path: 'edicionalumno', component: EditaralumnoComponent,canActivate: [AuthGuard] },
  { path: 'edicionservicio', component: EditarservicioComponent,canActivate: [AuthGuard] },
  { path: 'registroalumno', component: RegistroalumnoComponent,canActivate: [AuthGuard]},
  { path: 'servicio', component: ServicioComponent,canActivate: [AuthGuard]},
  { path: 'Admision', component: AdmisionComponent},
  { path: 'Admision/:id', component: AdmisionComponent},
  { path: 'ventas', component: VentasComponent,canActivate: [AuthGuard]},
  { path: 'registroadmin', component: RegistroadminComponent,canActivate: [AuthGuard]},
  { path: '', redirectTo: '/Inicio',pathMatch:'full' },




  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {scrollPositionRestoration: 'enabled'});
