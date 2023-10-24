import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexUserComponent } from './components/index-user/index-user.component';
import { HomeComponent } from './components/home/home.component';
import { MembresiaUserComponent } from './components/membresia-user/membresia-user.component';
import { MyUserComponent } from './components/my-user/my-user.component';
import { DmcaComponent } from './components/dmca/dmca.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
  },
  {
    path:'usuario', component:IndexUserComponent
  },
  {
    path:'usuario/membresia', component:MembresiaUserComponent
  },
  {
    path:'membresia', component:MembresiaUserComponent
  },
  {
    path:'usuario/perfil', component:MyUserComponent
  },
  {
    path:'dmca', component:DmcaComponent
  },
  {
    path:'preguntas-frecuentes', component:PreguntasFrecuentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
