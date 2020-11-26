import { Component, OnInit } from '@angular/core';
import { Award } from '../award'

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  awards: Award[] = [
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
