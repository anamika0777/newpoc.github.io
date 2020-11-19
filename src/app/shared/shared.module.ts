import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { SideComponent } from './side/side.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TopComponent, SideComponent, FooterComponent, ParentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopComponent, SideComponent, FooterComponent, ParentComponent
  ],
})
export class SharedModule { }
