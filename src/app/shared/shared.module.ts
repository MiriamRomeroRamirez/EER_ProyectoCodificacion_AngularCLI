import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { ButtonfloatComponent } from './buttonfloat/buttonfloat.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    SliderComponent,
    ButtonfloatComponent
  ],
  exports: [
    NavComponent, 
    FooterComponent,
    SliderComponent,
    ButtonfloatComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { } 
