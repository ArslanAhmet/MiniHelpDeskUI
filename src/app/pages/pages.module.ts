import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './login/state/user.reducer';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    RouterModule,
    StoreModule.forFeature('users', userReducer)
  ]
})
export class PagesModule { }
