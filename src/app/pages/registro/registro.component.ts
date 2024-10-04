import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'src/app/servicios/web.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  usuario: string = '';
  clave: string = '';
  tipo: string = 'Alumno'; // Valor por defecto

  private webService = inject(WebService);
  private router = inject(Router);
  private alertController = inject(AlertController);

  isLoading: boolean = false;

  async registrar() {
    if (!this.usuario || !this.clave || !this.tipo) {
      this.mostrarAlerta('Error', 'Todos los campos son requeridos');
      return;
    }

    this.isLoading = true;

    try {
      // Primero verificamos si el usuario ya existe
      const url = 'https://66f64336436827ced97666bb.mockapi.io/';
      const usuarios = await this.webService.request('GET', url, 'Usuarios') as Array<{
        usuario: string;
      }>;

      const usuarioExistente = usuarios.find(u => u.usuario === this.usuario);

      if (usuarioExistente) {
        await this.mostrarAlerta('Error', 'El usuario ya existe');
        this.isLoading = false;
        return;
      }

      // Si el usuario no existe, procedemos a registrarlo
      const nuevoUsuario = {
        tipo: this.tipo,
        usuario: this.usuario,
        clave: this.clave
      };

      await this.webService.request('POST', url, 'Usuarios', nuevoUsuario);
      await this.mostrarAlerta('Éxito', 'Usuario registrado correctamente');
      this.router.navigate(['/inicio-de-sesion']);
    } catch (error) {
      await this.mostrarAlerta('Error', 'Ocurrió un error durante el registro');
    } finally {
      this.isLoading = false;
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
