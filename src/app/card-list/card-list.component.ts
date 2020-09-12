import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [
    { image: '../../assets/images/card_1.png', title: 'Wypadki drogowe', description:'Lorem ipsum dolor sit amet, ectetur adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore.'},
    { image: '../../assets/images/card_2.jpg', title: 'Sprawy rozwodowe', description:'Lorem ipsum dolor sit amet, ectetur adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore.'},
    { image: '../../assets/images/card_3.jpg', title: 'Prawo karne', description:'Lorem ipsum dolor sit amet, ectetur adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
