import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dropdownOpen: boolean = false;
  isAccountMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    // Initialisation du composant
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    const dropdownMenu = document.querySelector('#dropdownNavbar');
    if (dropdownMenu !== null) {
      dropdownMenu.classList.toggle('hidden');
    }
  }

  toggleAccountMenu() {
    this.isAccountMenuOpen = !this.isAccountMenuOpen;
  }
}
