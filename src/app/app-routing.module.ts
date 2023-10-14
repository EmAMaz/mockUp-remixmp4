import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexUserComponent } from './components/index-user/index-user.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
  },
  {
    path:'usuario', component:IndexUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
