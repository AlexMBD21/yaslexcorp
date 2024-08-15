import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ProblemComponent } from "./shared/problem/problem.component";
import { SolutionComponent } from "./shared/solution/solution.component";
import { BannerComponent } from './shared/banner/banner.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProblemComponent, SolutionComponent, RouterModule, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Yas-Lex-Corp';
}
