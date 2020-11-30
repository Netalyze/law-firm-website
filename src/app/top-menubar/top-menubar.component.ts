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
        label: 'Usługi',
        items: [
          {label: 'Wypadki', routerLink: ['/wypadki-drogowe']},
          {label: 'Rozwody', routerLink: ['/sprawy-rozwodowe']},
          {label: 'Prawo karne', routerLink: ['/prawo-karne']}
        ]
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
