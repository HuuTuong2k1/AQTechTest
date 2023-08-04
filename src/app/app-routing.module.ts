import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RootComponent } from './modules/root/root.component';
import { HomeComponent } from './modules/home/home.component';
import { InfoDetailComponent } from './modules/info-detail/info-detail.component';
import { EducationProgramComponent } from './modules/education-program/education-program.component';
import { TuitionComponent } from './modules/tuition/tuition.component';
import { LearningResultComponent } from './modules/learning-result/learning-result.component';
import { TestScheduleComponent } from './modules/test-schedule/test-schedule.component';

const routes: Routes = [
  {
    path: "", redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: "", component: RootComponent,
    children: [
      {path: "home", component: HomeComponent},
      {path: "infoDetail", component: InfoDetailComponent},
      {path: "education-program", component: EducationProgramComponent},
      {path: "tuition", component: TuitionComponent},
      {path: "learning-result", component: LearningResultComponent},
      {path: "test-schedule", component: TestScheduleComponent}
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
