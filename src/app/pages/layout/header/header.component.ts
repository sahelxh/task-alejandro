import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(

  ) {}

  isMobile = false;
  menuOpen = false;


  ngOnInit() {
    this.checkMobile();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.checkMobile());
    }
  }

  checkMobile() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    }
  }
  closeMenu() {
    this.menuOpen = false;
  }

}
