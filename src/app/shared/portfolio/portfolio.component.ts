import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [CommonModule]
})
export class PortfolioComponent {
  projects = [
    {
      image: 'assets/img/porfolio-1.jpg',
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1'
    },
    {
      image: 'assets/img/porfolio-2.jpg',
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2'
    },
    // Agrega más proyectos según sea necesario
  ];
}
