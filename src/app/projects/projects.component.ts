import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
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
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
