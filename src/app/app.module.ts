import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importamos el módulo HttpClient, ademmás lo agregamos a imports
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// Importamos el servicio 'usuario' que creamos
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
