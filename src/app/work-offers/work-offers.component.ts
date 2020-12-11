import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Location } from '@angular/common';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-work-offers',
  templateUrl: './work-offers.component.html',
  styleUrls: ['./work-offers.component.css']
})
export class WorkOffersComponent implements OnInit {

  scrHeight:any;
  scrWidth:any;
  lng = 17.0333; 
  lat = 51.1;
  zoom = 12;
  item;

  offers = [
    {
      'offerId': '1',
      'companyName': 'Netalyze',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17.0333, 
        'officeLat': 51.1, 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'Angielski']
    },
    {
      'offerId': '2',
      'companyName': 'Netalyze',
      'position' : 'Radca prawny',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17.0433, 
        'officeLat': 51.1, 
      }, 
      'salary' : '7800',
      'logoSrc': '', 
      'requiredSkills': ['Prawo cywilne', 'Prawo karne', 'Angielski']
    },
    {
      'offerId': '3',
      'companyName': 'Netalyze',
      'position' : 'Radca prawny',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17.0433, 
        'officeLat': 51.134, 
      }, 
      'salary' : '9000',
      'logoSrc': '', 
      'requiredSkills': ['Prawo podatkowe', 'Niemiecki', 'Angielski']
    },
    {
      'offerId': '1',
      'companyName': 'Netalyze',
      'position' : 'Księgowa',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17.0444, 
        'officeLat': 51.147, 
      }, 
      'salary' : '4700',
      'logoSrc': '', 
      'requiredSkills': ['Pakiet MS Office', 'Angielski',]
    },
    {
      'offerId': '1',
      'companyName': 'Netalyze',
      'position' : 'Starsza księgowa',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17.0433, 
        'officeLat': 51.111, 
      }, 
      'salary' : '6700',
      'logoSrc': '', 
      'requiredSkills': ['Angielski', 'Pakiet MS Office',]
    },
    {
      'offerId': '1',
      'companyName': 'Netalyze',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17., 
        'officeLat': 51.05, 
      }, 
      'salary' : '12000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '2',
      'companyName': 'Netalyze',
      'position' : 'Radca prawny',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '',
      }, 
      'salary' : '7800',
      'logoSrc': '', 
      'requiredSkills': ['Prawo cywilne', 'Prawo karne', 'Angielski']
    },
    {
      'offerId': '3',
      'companyName': 'Netalyze',
      'position' : 'Radca prawny',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17.012, 
        'officeLat': 51.105, 
      }, 
      'salary' : '9000',
      'logoSrc': '', 
      'requiredSkills': ['Prawo podatkowe', 'Niemiecki', 'Angielski']
    },
    {
      'offerId': '1',
      'companyName': 'Netalyze',
      'position' : 'Księgowa',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17.11, 
        'officeLat': 51.1005,  
      }, 
      'salary' : '4700',
      'logoSrc': '', 
      'requiredSkills': ['Pakiet MS Office', 'Angielski',]
    },
    {
      'offerId': '1',
      'companyName': 'Netalyze',
      'position' : 'Starsza księgowa',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17.09, 
        'officeLat': 51.095, 
      }, 
      'salary' : '6700',
      'logoSrc': '', 
      'requiredSkills': ['Angielski', 'Pakiet MS Office',]
    },
    {
      'offerId': '1',
      'companyName': 'Netalyze',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 17.07, 
        'officeLat': 51.088,
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
  ];

  constructor(private location: Location, private messageService: MessageService) { }

  ngOnInit(): void {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
  }

  markerClicked(event) {
    this.messageService.add({severity:'info', summary:'Wybrana oferta', detail:this.offers[event.id()].position, life: 2000, sticky: false, closable: false});
  }

  offerClicked(event) {
    this.messageService.add({severity:'info', summary:'Wybrana oferta', detail:event.position, life: 2000, sticky: false, closable: false});
  }

}
