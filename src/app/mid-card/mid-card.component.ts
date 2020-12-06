import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-card',
  templateUrl: './mid-card.component.html',
  styleUrls: ['./mid-card.component.css']
})
export class MidCardComponent implements OnInit {
  doughnutData: any;
  doughnutOptions: any;


  constructor() { 
    this.doughnutData = {
      labels: ['Sprawy przegrane', 'Sprawy zakończone ugodą', 'Wygrana klienta'],
      datasets: [
        {
          data: [117, 280, 410],
          borderColor: [
            "#827370",
            "#d7d7cf",
            "#557a95"
          ],
          backgroundColor: [
            "#827370",
            "#d7d7cf",
            "#557a95"
          ]
        }]
    };
    this.doughnutOptions = {
      legend: {
        position: 'bottom'
      }
    }
  }

  ngOnInit(): void {
  }

}
