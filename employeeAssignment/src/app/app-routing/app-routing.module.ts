import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { DepartmentComponent } from '../department/department.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { DepartmentDetailsComponent } from '../department-details/department-details.component'
import { ToDoComponent } from '../to-do/to-do.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [{
      path: 'details/:id',
      component: EmployeeDetailsComponent
    }]
  },
  {
    path: 'department',
    component: DepartmentComponent,
    children: [{
      path: 'details/:id',
      component: DepartmentDetailsComponent
    }]
  },
  {
    path: 'todo',
    component: ToDoComponent
  },
  {
    path: 'todo/details/:id',
    component: ToDoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }