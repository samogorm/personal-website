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
      icon: 'fa-html5'
    },
    {
      title: 'CSS',
      icon: 'fa-css3'
    },
    {
      title: 'Sass',
      icon: 'fa-sass'
    },
    {
      title: 'JavaScript',
      icon: 'fa-js-square'
    },
    {
      title: 'Node JS',
      icon: 'fa-node'
    },
    {
      title: 'React + React Native',
      icon: 'fa-react'
    },
    {
      title: 'Angular 2+',
      icon: 'fa-angular'
    },
    {
      title: 'React + React Native',
      icon: 'fa-react'
    },
    {
      title: 'PHP',
      icon: 'fa-php'
    },
    {
      title: 'Laravel',
      icon: 'fa-laravel'
    }
  ];

  constructor() { }
}
