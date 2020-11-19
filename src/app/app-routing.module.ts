import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';



const routes: Routes = [
  {
    path: "", component: LoginComponent

  }
  , { path: "welcome", loadChildren: () => MainModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
