import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-work-offers',
  templateUrl: './work-offers.component.html',
  styleUrls: ['./work-offers.component.css']
})
export class WorkOffersComponent implements OnInit {

  scrHeight:any;
  scrWidth:any;
  lng = 7.809007; 
  lat = 51.678418;
  @Input() itemSelected = false;
  item;

  offers = [
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : 7.809007, 
        'officeLat': 51.678418, 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '2',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '',
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '',
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLoc': {
        'officeLong' : '', 
        'officeLat': '', 
      }, 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },

  ];

  constructor(private location: Location) { }

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
    this.itemSelected = true;
    this.location.replaceState(`/szczegoly-oferty/${this.offers[event.id()].offerId}`);
    this.item = event;
  }

  offerClicked(event) {
    this.itemSelected = true;
    this.location.replaceState(`/szczegoly-oferty/${event.offerId}`);
    this.item = event;
  }

  detailsClosed(event) {
    this.itemSelected = false;
    this.location.replaceState('/oferty-pracy');
  }

}
