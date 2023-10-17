import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IndexUserComponent } from './components/index-user/index-user.component';
import { HomeComponent } from './components/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalComponent } from './components/modal/modal.component';
import { ModalAccesoComponent } from './components/modal-acceso/modal-acceso.component';
import { MembresiaUserComponent } from './components/membresia-user/membresia-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ModalComponent,
    ModalAccesoComponent,
    IndexUserComponent,
    HomeComponent,
    MembresiaUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    NgxPaginationModule
  ],
  providers: [
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
