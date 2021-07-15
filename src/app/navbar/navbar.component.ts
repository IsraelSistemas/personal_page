import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navigation') navigation!: ElementRef;

  projects = [{
    link: 'http://tumarcogaleria.com',
    image: 'assets/tumarcogaleria.png',
    title: 'Tu Marco Galeria',
    description: 'Deajdksljaslk'
  }, {
    link: 'https://www.facebook.com/HuellitasApp',
    image: 'assets/huellitas.jpg',
    title: 'Huellitas App',
    description: 'Deajdksljaslk'
  }, {
    link: 'http://tumarcogaleria.com',
    image: 'assets/tumarcogaleria.png',
    title: 'Tu Marco Galeria',
    description: 'Deajdksljaslk'
  }, {
    link: 'https://www.facebook.com/HuellitasApp',
    image: 'assets/huellitas.jpg',
    title: 'Huellitas App',
    description: 'Deajdksljaslk'
  }, {
    link: 'http://tumarcogaleria.com',
    image: 'assets/tumarcogaleria.png',
    title: 'Tu Marco Galeria',
    description: 'Deajdksljaslk'
  }, {
    link: 'https://www.facebook.com/HuellitasApp',
    image: 'assets/huellitas.jpg',
    title: 'Huellitas App',
    description: 'Deajdksljaslk'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.navigation.nativeElement.classList.toggle("hidden");
  }

}
