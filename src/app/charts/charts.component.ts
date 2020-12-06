import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  barData: any;
  doughnutData: any;

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

    this.doughnutData = {
      labels: ['Klienci indywidualni', 'Klienci zagraniczni', 'Firmy'],
      datasets: [
        {
          data: [397, 380, 410],
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
  }


  ngOnInit(): void {
  }

}
