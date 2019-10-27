import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import {DataService} from './service/data.service';
import { UsuarioComponent } from './usuario/usuario.component'

const AppRoutes: Routes = [

  { path: "" , component: FormComponent },
  { path: ":id" , component: UsuarioComponent },
  { path: '**', component: ErrorComponent },

]; 

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ErrorComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, {useHash:true})
  ],
  providers: [DataService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
