import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @Output() education = [
   {
     date: 'July 2016',
     location: 'University of Bolton',
     title: 'Bachelor of Science, Computing & Website Development - 2:1'
   }
 ];

 @Output() workExperience = [
  {
    date: 'Sept 2016 - Present',
    location: 'Suresite',
    title: 'Junior Application Developer'
  },
  {
    date: 'Nov 2015 - July 2016',
    location: 'Tubado',
    title: 'Full-Stack Developer & Designer'
  }
 ];

}
