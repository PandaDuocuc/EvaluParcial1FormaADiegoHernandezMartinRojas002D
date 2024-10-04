import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { PrincipalDocenteComponent } from './principal-docente/principal-docente.component';
import { PrincipalAlumnoComponent } from './principal-alumno/principal-alumno.component';
import { DetalleAsignaturaDocenteComponent } from './detalle-asignatura-docente/detalle-asignatura-docente.component';
import { DetalleAsignaturaAlumnoComponent } from './detalle-asignatura-alumno/detalle-asignatura-alumno.component';
import { DetalleAsignaturaDocente2Component } from './detalle-asignatura-docente2/detalle-asignatura-docente2.component';
import { DetalleAsignaturaAlumno2Component } from './detalle-asignatura-alumno2/detalle-asignatura-alumno2.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component: InicioDeSesionComponent },
  { path: 'inicio-de-sesion', component: InicioDeSesionComponent },
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent },
  { path: 'principal-docente', component: PrincipalDocenteComponent },
  { path: 'principal-alumno', component: PrincipalAlumnoComponent },
  { path: 'detalle-asignatura-docente', component: DetalleAsignaturaDocenteComponent },
  { path: 'detalle-asignatura-docente2', component: DetalleAsignaturaDocente2Component},
  { path: 'detalle-asignatura-alumno', component: DetalleAsignaturaAlumnoComponent },
  { path: 'detalle-asignatura-alumno2', component: DetalleAsignaturaAlumno2Component},
  { path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
