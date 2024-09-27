import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.scss'],
})
export class InicioDeSesionComponent  implements OnInit {

  usuario: string = ''; // Campo de entrada para el usuario
  clave: string = ''; // Campos de entrada para el usuario y clave

  private authService = inject(AuthService);  // Obtener el servicio de autenticación
  private router = inject(Router);  // Obtener el servicio de navegación

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean; // Variable para almacenar el estado de loginFailed

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed); // Obtener el estado de loginFailed
  }

  isLoading: boolean = false;

  async login(usuario: string, clave: string) {
    this.isLoading = true; // Activar el estado de carga
    await this.authService.buscarBD4(usuario, clave); // Intentar hacer login
    this.isLoading = false; // Desactivar el estado de carga una vez que la autenticación termine

    // Suscribirse al observable para verificar el estado de autenticación
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.usuario = ''; // Limpiar el campo de usuario
        this.clave = ''; // Limpiar el campo de clave
        this.authService.getUserType().subscribe(userType => {
          if (userType === 'Docente') {
            this.router.navigate(['/principal-docente']);
          } else if (userType === 'Alumno') {
            this.router.navigate(['/principal-alumno']);
          } else {
            console.error('Tipo de usuario desconocido');
          }
        });
      } else {
        this.loginFailed = true;
      }
    });
  }

  // Método para redirigir a la página de restablecer contraseña
  irARestablecerContrasena() {
    this.router.navigate(['/restablecer-contrasena']);
  }
}
