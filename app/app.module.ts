import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { AdminGuard } from './admin/admin.guard';
import { AboutGuard } from './about/about.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService,AdminGuard,AboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
