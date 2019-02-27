import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let navbar = document.getElementById('main-navbar');
    let offset = window.pageYOffset;

    if (offset > 150 && !navbar.classList.contains('scrolled')) {
      navbar.classList.add('scrolled');
    }

    if (offset < 150 && navbar.classList.contains('scrolled')) {
      navbar.classList.remove('scrolled', 'sleep');
    }

    if (offset > 150 && !navbar.classList.contains('awake')) {
      navbar.classList.add('awake');
    }
    if (offset < 150 && navbar.classList.contains('awake')) {
      navbar.classList.remove('awake');
      navbar.classList.add('sleep');
    }
  }
}