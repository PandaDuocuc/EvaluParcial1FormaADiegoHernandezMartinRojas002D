import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { PrincipalDocenteComponent } from './principal-docente/principal-docente.component';
import { PrincipalAlumnoComponent } from './principal-alumno/principal-alumno.component';
import { DetalleAsignaturaDocenteComponent } from './detalle-asignatura-docente/detalle-asignatura-docente.component';
import { DetalleAsignaturaAlumnoComponent } from './detalle-asignatura-alumno/detalle-asignatura-alumno.component';

const routes: Routes = [
  { path: '', component: InicioDeSesionComponent },
  { path: 'inicio-de-sesion', component: InicioDeSesionComponent },
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent },
  { path: 'principal-docente', component: PrincipalDocenteComponent },
  { path: 'principal-alumno', component: PrincipalAlumnoComponent },
  { path: 'detalle-asignatura-docente/:id', component: DetalleAsignaturaDocenteComponent },
  { path: 'detalle-asignatura-alumno/:id', component: DetalleAsignaturaAlumnoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
