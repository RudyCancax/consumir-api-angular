import { Component, OnInit } from '@angular/core';
// Inyectaremos el servicio, para ello importamos el UsuarioService
import { UsuarioService } from './usuario.service';


/**
 * Importamos el servicio UserService desde su ubicación, 
 * luego definiremos usuarios como un array vacío, 
 * luego en el constructor inyectamos como una dependencia a UsersService 
 * y finalmente dentro del hook ngOnInit 
 * llamamos al método getUsers 
 * que hará la solicitud y finalmente la respuesta la asigna a this.users.
 */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ejercicio-api';

  // Definimos un arreglo tipo 'any' vacío, este almacenará el objeto que el API nos devuelva
  usuarios: any[] = [];
  perros: any[] = [];

  // Constructor que recibe como parámetro el servicio UsuarioService
  constructor( protected usuarioService: UsuarioService ) {}

  // Al inicializar el componente, en ngOnInit ejecutará el código siguiente:
  ngOnInit(){
    // Usando el servicio, y la función getUsuarios(), que nos dé la información solicitada
    this.solicitaUsuarios();
    this.solicitaPerro();
  }

  solicitaUsuarios()
  {
    this.usuarioService.getUsuarios().subscribe(
      (datos) => { // Correctamente
        this.usuarios = datos['results'];
        console.log(datos);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  solicitaPerro()
  {
    this.usuarioService.getPerro().subscribe(
      (datos2) =>{
        this.perros = datos2['message'];
        console.log(datos2);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
