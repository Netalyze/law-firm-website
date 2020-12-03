import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  @Output() offerClick = new EventEmitter();
  @Input() offers: any = [
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '2',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },
    {
      'offerId': '1',
      'companyName': 'Company',
      'position' : 'Fullstack Angular Developer',
      'city' : 'Wrocław',
      'officeLong' : '', 
      'officeLat': '', 
      'salary' : '10000',
      'logoSrc': '', 
      'requiredSkills': ['Angular', 'Spring', 'English']
    },

  ];
  markers = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  offerItemClicked(offer) {
    this.offerClick.emit(offer);
  }

}
