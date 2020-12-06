import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.css']
})

export class RightCardComponent implements OnInit {

  barData : any;
  barOptions :any;

  constructor() {
    this.barData = {
      labels: ['2012', '2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [
        {
          label: '% przegranych spraw',
          backgroundColor: '#827370',
          data: [19, 16, 11, 9, 8, 5, 4]
        },
        {
          label: '% wygranych spraw',
          backgroundColor: '#557a95',
          data: [81, 84, 89, 91, 92, 95, 96]
        }
      ],
    };
    this.barOptions = {
      legend: {
        position: 'bottom'
      }
    };
    }


  ngOnInit(): void {
  }

}
