import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./feature-components/user-list/user-list.component";
import {HeaderComponent} from "./feature-components/header/header.component";

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'users', component: UserListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
