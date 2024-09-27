import { Component } from '@angular/core';

interface Clase {
  dia: string;
  horaInicio: string;
  horaFin: string;
}

@Component({
  selector: 'app-detalle-asignatura-alumno2',
  templateUrl: './detalle-asignatura-alumno2.component.html',
  styleUrls: ['./detalle-asignatura-alumno2.component.scss'],
})
export class DetalleAsignaturaAlumno2Component {
  nombreAsignatura: string = 'Calidad de software';
  clases: Clase[] = [
    { dia: 'Miércoles', horaInicio: '13:01', horaFin: '15:50' }
  ];
  contenidos: string[] = [
    'Experiencia de Aprendizaje 1 - ',
    'Experiencia de Aprendizaje 2 - Garantizando la calidad del software: Aplicación de conceptos y diseño de casos de prueba',
    'Experiencia de Aprendizaje 3 - Optimizando la ejecución de pruebas: Técnicas, seguridad y documentación para garantizar la calidad del software'
  ];

  escanearCodigoQR() {
    // Aquí iría la lógica para generar el código QR
    console.log('Escaneando código QR...');
  }
}
