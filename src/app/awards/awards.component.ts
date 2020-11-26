import { Component, OnInit } from '@angular/core';
import { Award } from '../award'

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  awards: Award[] = [
    {icon: 'school', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veritatis voluptate eaque, id repellendus nulla sed dolores perspiciatis pariatur quisquam numquam facere, cupiditate voluptatibus? Sint est excepturi amet consectetur non!'},
    {icon: 'brightness_auto', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veritatis voluptate eaque, id repellendus nulla sed dolores perspiciatis pariatur quisquam numquam facere, cupiditate voluptatibus? Sint est excepturi amet consectetur non!'},
    {icon: 'verified_user', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veritatis voluptate eaque, id repellendus nulla sed dolores perspiciatis pariatur quisquam numquam facere, cupiditate voluptatibus? Sint est excepturi amet consectetur non!'},
    {icon: 'emoji_events', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veritatis voluptate eaque, id repellendus nulla sed dolores perspiciatis pariatur quisquam numquam facere, cupiditate voluptatibus? Sint est excepturi amet consectetur non!'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
