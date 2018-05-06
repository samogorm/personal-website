import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent  {

  skills = [
    {
      title: 'HTML',
      icon: 'fab fa-html5'
    },
    {
      title: 'CSS',
      icon: 'fab fa-css3'
    },
    {
      title: 'Sass',
      icon: 'fab fa-sass'
    },
    {
      title: 'JavaScript',
      icon: 'fab fa-js-square'
    },
    {
      title: 'Node JS',
      icon: 'fab fa-node'
    },
    {
      title: 'React + React Native',
      icon: 'fab fa-react'
    },
    {
      title: 'Angular 2+',
      icon: 'fab fa-angular'
    },
    {
      title: 'PHP',
      icon: 'fab fa-php'
    },
    {
      title: 'Laravel',
      icon: 'fab fa-laravel'
    },
    {
      title: 'Git',
      icon: 'fab fa-git'
    },
    {
      title: 'MySql',
      icon: 'fas fa-database'
    },
    {
      title: 'Unit Testing',
      icon: 'fas fa-bug'
    }
  ];

  constructor() { }
}
