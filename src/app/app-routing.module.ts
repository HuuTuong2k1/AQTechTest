import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RootComponent } from './modules/root/root.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: "", component: RootComponent,
    children: [
      {path: "", component: HomeComponent}
    ]
  },

  {
    path: "login", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
