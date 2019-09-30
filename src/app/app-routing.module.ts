import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [{path : '' , component: ContainerComponent},
  {path: 'user/details/:id', component : UserDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
