import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaDocente2Component } from './detalle-asignatura-docente2.component';

describe('DetalleAsignaturaDocente2Component', () => {
  let component: DetalleAsignaturaDocente2Component;
  let fixture: ComponentFixture<DetalleAsignaturaDocente2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsignaturaDocente2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAsignaturaDocente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
