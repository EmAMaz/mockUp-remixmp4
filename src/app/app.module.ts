import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { IndexUserComponent } from './components/index-user/index-user.component';
import { HomeComponent } from './components/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalComponent } from './components/modal/modal.component';
import { ModalAccesoComponent } from './components/modal-acceso/modal-acceso.component';
import { MembresiaUserComponent } from './components/membresia-user/membresia-user.component';
import { MyUserComponent } from './components/my-user/my-user.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { DmcaComponent } from './components/dmca/dmca.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';
import { BotonRegresarComponent } from './components/boton-regresar/boton-regresar.component';
import { MenuResponsiveComponent } from './components/menu-responsive/menu-responsive.component';
import { MenuResponsiveHomeComponent } from './components/menu-responsive-home/menu-responsive-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ModalComponent,
    ModalAccesoComponent,
    IndexUserComponent,
    HomeComponent,
    MembresiaUserComponent,
    MyUserComponent,
    TerminosCondicionesComponent,
    DmcaComponent,
    PreguntasFrecuentesComponent,
    PoliticaPrivacidadComponent,
    BotonRegresarComponent,
    MenuResponsiveComponent,
    MenuResponsiveHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
