import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { EmployeeDisplayModule } from '@oasisdigital/employee-display';
import { EmployeeApi } from '@oasisdigital/employee-api';

import { EmployeeListComponent } from './employee-list/employee-list.component';

const ROUTES: Route[] = [
  { path: '', component: EmployeeListComponent }
];

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    EmployeeDisplayModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpModule
  ],
  bootstrap: [EmployeeListComponent],
  providers: [EmployeeApi]
})
export class EmployeeListModule { }
