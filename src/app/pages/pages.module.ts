import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { PrincipalDocenteComponent } from './principal-docente/principal-docente.component';
import { PrincipalAlumnoComponent } from './principal-alumno/principal-alumno.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { DetalleAsignaturaAlumnoComponent } from './detalle-asignatura-alumno/detalle-asignatura-alumno.component';
import { DetalleAsignaturaDocenteComponent } from './detalle-asignatura-docente/detalle-asignatura-docente.component';


@NgModule({
  declarations: [
    InicioDeSesionComponent,
    PrincipalDocenteComponent,
    PrincipalAlumnoComponent,
    RestablecerContrasenaComponent,
    DetalleAsignaturaAlumnoComponent,
    DetalleAsignaturaDocenteComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
