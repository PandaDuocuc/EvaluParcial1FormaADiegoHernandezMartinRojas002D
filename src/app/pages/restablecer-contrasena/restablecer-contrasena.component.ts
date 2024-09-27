import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.component.html',
  styleUrls: ['./restablecer-contrasena.component.scss'],
})
export class RestablecerContrasenaComponent {
  correo: string = '';

  constructor(private alertController: AlertController) {}

  async enviarSolicitud() {
    const alert = await this.alertController.create({
      header: 'Solicitud enviada',
      message: 'Se ha enviado la solicitud de restablecimiento.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

