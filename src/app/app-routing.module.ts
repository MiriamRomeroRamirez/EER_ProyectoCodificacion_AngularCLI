import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index1Component } from './pages/index1/index1.component';
import { Index2Component } from './pages/index2/index2.component';
import { Index3Component } from './pages/index3/index3.component';

const routes: Routes = [
  {
      path: '',
      component: Index1Component,
      pathMatch: 'full'
  },
  {
      path: 'index2',
      component: Index2Component
  },
  {
      path: 'index3',
      component: Index3Component
  },
  {
      path: 'index1/:id',
      component: Index1Component 
  },
  {
      path: '**',
      redirectTo: ''
  }
];


@NgModule ({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule 
  ]
}) 
export class AppRoutingModule { }
