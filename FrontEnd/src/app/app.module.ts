import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
██████  ██    ██ ████████  █████  ███████
██   ██ ██    ██    ██    ██   ██ ██
██████  ██    ██    ██    ███████ ███████
██   ██ ██    ██    ██    ██   ██      ██
██   ██  ██████     ██    ██   ██ ███████
*/
import {APP_ROUTING} from './app.routes';



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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
