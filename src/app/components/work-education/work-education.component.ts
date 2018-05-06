import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-education',
  templateUrl: './work-education.component.html',
  styleUrls: ['./work-education.component.css']
})
export class WorkEducationComponent implements OnInit {
  @Input() date: string;
  @Input() location: string;
  @Input() title: string;
  
  constructor() { }

  ngOnInit() {
  }

}
