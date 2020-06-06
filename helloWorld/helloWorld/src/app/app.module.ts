import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { MetodoComponent } from './metodo/metodo.component';
import { BlogComponent } from './blog/blog.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    MetodoComponent,
    BlogComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent,
    MetodoComponent,
    BlogComponent,
  SobreComponent,
  ContatoComponent]
})
export class AppModule { }
