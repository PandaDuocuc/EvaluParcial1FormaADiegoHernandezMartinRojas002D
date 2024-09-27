import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaAlumno2Component } from './detalle-asignatura-alumno2.component';

describe('DetalleAsignaturaAlumno2Component', () => {
  let component: DetalleAsignaturaAlumno2Component;
  let fixture: ComponentFixture<DetalleAsignaturaAlumno2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsignaturaAlumno2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAsignaturaAlumno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
