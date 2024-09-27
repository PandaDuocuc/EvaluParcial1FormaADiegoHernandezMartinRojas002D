import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebService } from './web.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Para mostrar el estado del login

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuario$ = this.usuarioSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable();

  private userTypeSubject = new BehaviorSubject<string>('');
  userType$ = this.userTypeSubject.asObservable();

  webservice = inject(WebService); // Obtener el servicio de webService

  async buscarBD4(usuario: string, clave: string){
    const url = 'https://66f64336436827ced97666bb.mockapi.io/'
    const res = await this.webservice.request('GET', url, 'Usuarios') as Array<{ // Definir la interface para los usuarios de la API
      id: string,
      tipo: string,
      usuario: string,
      clave: string
    }>;

    const user = res.find(u => u.usuario === usuario && u.clave === clave); // Buscar un usuario en la lista de usuarios de la API
    if (user) {
      console.log('Autenticación exitosa!');  // Autenticación exitosa!
      console.log(user);
      this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
      this.loginFailedSubject.next(false); // Restablecer loginFailed a false
      this.usuarioSubject.next(user.usuario);
      this.userTypeSubject.next(user.tipo);
    } else {
      this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
      this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
      this.userTypeSubject.next('');
    }
  }

  logout(): void {
    this.usuarioSubject.next('');  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  //
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.  // Desloguearse y
    this.loginFailedSubject.next(false);  // Restablecer loginFailed al cerrar sesión
    this.userTypeSubject.next('');
  }

  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }

  getUserType() {
    return this.userType$;
  }
}
