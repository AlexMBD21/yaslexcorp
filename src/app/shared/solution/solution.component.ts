import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solution',
  standalone: true,
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css'],
  imports: [CommonModule]
})
export class SolutionComponent {
  servicios = [
    {
      titulo: 'Civil',
      descripcion: 'Especialidad y experiencia en el Sector Salud.',
      detalles: 'Contamos con un recurso humano altamente capacitado y experto en el manejo jurídico del sector salud en todos los niveles (dirección, inspección vigilancia y control, aseguramiento, prestación de servicios en salud), que ha generado experiencias exitosas en más de 100 prestadores de servicios en salud a nivel nacional.',
      icono: 'fa-solid ',
      color: '#D2AB4D'
    },
    {
      titulo: 'Penal',
      descripcion: 'Acompañamiento jurídico integral a todas las áreas de la organización.',
      detalles: 'Damos respuesta oportuna y eficiente a los requerimientos jurídicos de nuestros clientes, integrando a todas las áreas de la organización en la necesidad de proteger legalmente la actividad en salud, no solo de manera resolutiva sino también de manera preventiva.',
      icono: 'fa-solid ',
      color: '#D2AB4D'
    },
    {
      titulo: 'Laboral',
      descripcion: 'Tecnologías de la información que mejoran el desempeño legal.',
      detalles: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis vitae inventore pariatur numquam iure accusamus sed! Omnis molestiae est, minima expedita hic magni eveniet, officia dolore optio deserunt ducimus ullam.',
      icono: 'fa-solid ',
      color: '#D2AB4D'
    },
    {
      titulo: 'Familiar',
      descripcion: 'Tecnologías de la información que mejoran el desempeño legal.',
      detalles: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis vitae inventore pariatur numquam iure accusamus sed! Omnis molestiae est, minima expedita hic magni eveniet, officia dolore optio deserunt ducimus ullam.',
      icono: 'fa-solid ',
      color: '#D2AB4D'
    },
    {
      titulo: 'Corporativo',
      descripcion: 'Tecnologías de la información que mejoran el desempeño legal.',
      detalles: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis vitae inventore pariatur numquam iure accusamus sed! Omnis molestiae est, minima expedita hic magni eveniet, officia dolore optio deserunt ducimus ullam.',
      icono: 'fa-solid ',
      color: '#D2AB4D'
    },
   
  ];
}
