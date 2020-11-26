import { Component, OnInit, Input } from '@angular/core';
import { Award } from '../award'

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {

  @Input() award: Award;

  constructor() { }

  ngOnInit(): void {
  }

}
