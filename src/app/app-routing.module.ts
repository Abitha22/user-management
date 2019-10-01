import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { UserinfoComponent } from './UserInfo/userinfo/userinfo.component';


const routes: Routes = [{path : '' , component: ContainerComponent},
  {path: 'user/details/:id', component : UserinfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
