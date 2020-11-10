import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import subpageData from 'src/cards-subpage-data.json'

@Component({
  selector: 'app-card-subpage',
  templateUrl: './card-subpage.component.html',
  styleUrls: ['./card-subpage.component.css']
})
export class CardSubpageComponent implements OnInit {

  // wartość 'link' przekazana z card-list.componenet
  subpage: string
  // slownik wybrany z cards-subpage-data
  data: any

  constructor(private router: Router) { 
    // "Rozpakowujemy" wartość subpageLink przekazają z parenta, zapisuje się ona w history.state
    this.router.getCurrentNavigation().extras.state.subpageLink
  }

  ngOnInit(): void {
    this.subpage = history.state.subpageLink
    this.data = subpageData[this.subpage]
  }
}
