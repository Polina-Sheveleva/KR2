import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AboutGuard} from './about/about.guard';
import { AdminGuard} from './admin/admin.guard';
const routes: Routes = [

  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent, canActivate: [AboutGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[AboutGuard,AdminGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
