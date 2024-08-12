import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  imports: [CommonModule]
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      image: 'assets/img/slider-01.png',
      message: 'Este es un testimonio increíble sobre el producto.',
      author: 'Autor 1',
      rating: 5
    },
    {
      image: 'assets/img/slider-02.png',
      message: 'Me encantó usar este servicio, lo recomiendo mucho.',
      author: 'Autor 2',
      rating: 4
    },
    {
      image: 'assets/img/slider-03.png',
      message: 'Una experiencia fantástica, definitivamente volveré.',
      author: 'Autor 3',
      rating: 5
    },
    {
      image: 'assets/img/slider-04.png',
      message: 'Una experiencia fantástica, definitivamente volveré.',
      author: 'Autor 4',
      rating: 3
    },
    {
      image: 'assets/img/slider-05.png',
      message: 'Una experiencia fantástica, definitivamente volveré.',
      author: 'Autor 5',
      rating: 4
    },
    // Agrega más testimonios según sea necesario
  ];

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  scrollLeft(): void {
    const cardContainer = document.querySelector('.card-container') as HTMLElement;
    cardContainer.scrollBy({ left: -250, behavior: 'smooth' });
  }

  scrollRight(): void {
    const cardContainer = document.querySelector('.card-container') as HTMLElement;
    cardContainer.scrollBy({ left: 250, behavior: 'smooth' });
  }
}
