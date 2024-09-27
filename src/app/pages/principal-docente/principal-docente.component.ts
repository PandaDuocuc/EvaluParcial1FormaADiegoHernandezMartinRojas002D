import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Asignatura {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-principal-docente',
  templateUrl: './principal-docente.component.html',
  styleUrls: ['./principal-docente.component.scss'],
})
export class PrincipalDocenteComponent {
  asignaturas: Asignatura[] = [
    { id: 1, nombre: 'Matemáticas' },
    { id: 2, nombre: 'Lenguaje' },
    { id: 3, nombre: 'Inglés' },
  ];

  constructor(private router: Router) {}

  irADetalleAsignatura(asignaturaId: number) {
    this.router.navigate(['/detalle-asignatura-docente', asignaturaId]);
  }
}
