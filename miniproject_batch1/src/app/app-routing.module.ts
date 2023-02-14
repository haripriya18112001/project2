import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import { DepartmentComponent } from './department/department.component';


const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"department",component:DepartmentComponent
  },
  {
    path:"depart",component:DepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

