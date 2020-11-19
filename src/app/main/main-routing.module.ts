import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../shared/parent/parent.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:"", component: ParentComponent, children : [
    {
      path : '', component : WelcomeComponent
    },
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
