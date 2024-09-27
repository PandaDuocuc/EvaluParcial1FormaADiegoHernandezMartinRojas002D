import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-asignatura-docente',
  templateUrl: './detalle-asignatura-docente.component.html',
  styleUrls: ['./detalle-asignatura-docente.component.scss'],
})
export class DetalleAsignaturaDocenteComponent  implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
    });
  }
}
