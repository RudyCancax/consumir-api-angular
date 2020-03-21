import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(protected http: HttpClient) { }


  getUsuarios() {
    return this.http.get('https://randomuser.me/api/?results=3');
  }

  getPerro(){
    return this.http.get('https://dog.ceo/api/breed/hound/images/random/5');
  }
}


