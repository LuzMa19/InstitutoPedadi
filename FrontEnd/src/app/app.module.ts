import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFirestoreModule} from '@angular/fire/firestore';

/*
███████ ███████ ██████  ██    ██ ██  ██████ ██  ██████  ███████
██      ██      ██   ██ ██    ██ ██ ██      ██ ██    ██ ██
███████ █████   ██████  ██    ██ ██ ██      ██ ██    ██ ███████
     ██ ██      ██   ██  ██  ██  ██ ██      ██ ██    ██      ██
███████ ███████ ██   ██   ████   ██  ██████ ██  ██████  ███████
*/

import {MessageService} from '../app/services/message.service';

/*
██████  ██    ██ ████████  █████  ███████
██   ██ ██    ██    ██    ██   ██ ██
██████  ██    ██    ██    ███████ ███████
██   ██ ██    ██    ██    ██   ██      ██
██   ██  ██████     ██    ██   ██ ███████
*/
import { APP_ROUTING } from './app.routes';



/*
 ██████  ██████  ███    ███ ██████   ██████  ███    ██ ███████ ███    ██ ████████ ███████ ███████
██      ██    ██ ████  ████ ██   ██ ██    ██ ████   ██ ██      ████   ██    ██    ██      ██
██      ██    ██ ██ ████ ██ ██████  ██    ██ ██ ██  ██ █████   ██ ██  ██    ██    █████   ███████
██      ██    ██ ██  ██  ██ ██      ██    ██ ██  ██ ██ ██      ██  ██ ██    ██    ██           ██
 ██████  ██████  ██      ██ ██       ██████  ██   ████ ███████ ██   ████    ██    ███████ ███████
*/



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ModeloComponent } from './components/modelo/modelo.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarAuthComponent } from './components/shared/navbar-auth/navbar-auth.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { RegistroalumnoComponent } from './components/registroalumno/registroalumno.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { EditaralumnoComponent } from './components/editaralumno/editaralumno.component';
import { EditarservicioComponent } from './components/editarservicio/editarservicio.component';
import { AdmisionComponent } from './components/admision/admision.component';
import { VentasComponent } from './components/ventas/ventas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactoComponent,
    ModeloComponent,
    RegistroComponent,
    GaleriaComponent,
    LoginComponent,
    NavbarAuthComponent,
    BienvenidaComponent,
    EditarusuarioComponent,
    RegistroalumnoComponent,
    ServicioComponent,
    EditaralumnoComponent,
    EditarservicioComponent,
    AdmisionComponent,
    VentasComponent

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [AngularFirestore,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
