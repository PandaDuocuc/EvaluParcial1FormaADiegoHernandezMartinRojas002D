import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string = "";
  @Input() nombreUsuario: string = '';
  @Input() mostrarBienvenida: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.usuario$.subscribe(usuario => {
      this.nombreUsuario = usuario;
    });
  }
}
