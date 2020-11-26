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
    // dokumentacja do edycji elementów:
    // https://www.primefaces.org/primeng/showcase/#/menumodel
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
        label: 'Usługi'
      },
      {
        label: 'Oferty pracy', routerLink: ['/oferty-pracy'],
      },
      {
        label: 'Kontakt'
      }
    ];
  }

}
