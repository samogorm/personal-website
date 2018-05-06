import { Component } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent {
  socialMedia = [
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samantha-o-gorman-8b955284/',
      icon: 'fab fa-linkedin-in'
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/sam.ogorm',
      icon: 'fab fa-instagram'
    },
    {
      title: 'Twitter',
      url: 'https://www.twitter.com/samogorm',
      icon: 'fab fa-twitter'
    },
    {
      title: 'CodePen',
      url: 'https://codepen.io/SAM-O10/',
      icon: 'fab fa-codepen'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/samogorm',
      icon: 'fab fa-github'
    }
  ]
  constructor() { }

}
