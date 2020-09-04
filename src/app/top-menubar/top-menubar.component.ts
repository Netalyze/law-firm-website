import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-menubar',
  templateUrl: './top-menubar.component.html',
  styleUrls: ['./top-menubar.component.css']
})
export class TopMenubarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'O nas'
      },
      {
        label: 'Nasze kancelarie',
        items: [
          {label: 'Gdańsk'},
          {label: 'Katowice'},
          {label: 'Warszawa'},
          {label: 'Wrocław'}
        ]
      },
      {
        label: 'Oferty pracy',
      },
      {
        label: 'Kontakt'
      }
    ];
  }

}
