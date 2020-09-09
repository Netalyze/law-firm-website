import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [
    {title: 'Wypadki drogowe', description:'Lorem ipsum dolor sit amet, ectetur adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore.'},
    {title: 'Wypadki niedrogowe', description:'Lorem ipsum dolor sit amet, ectetur adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore.'},
    {title: 'Wypadki prawie drogowe', description:'Lorem ipsum dolor sit amet, ectetur adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
