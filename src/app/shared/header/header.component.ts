import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatMenuModule, RouterModule, NgIf, MatMenuTrigger]
})
export class HeaderComponent {
  menuOpen = false;

  @ViewChild('NosotrosMenu') NosotrosMenu!: MatMenuTrigger;
  @ViewChild('serviciosMenu') serviciosMenu!: MatMenuTrigger;

  openMenu(menu: MatMenuTrigger) {
    menu.openMenu();
  }

  closeMenu(menu: MatMenuTrigger) {
    menu.closeMenu();
  }
}
