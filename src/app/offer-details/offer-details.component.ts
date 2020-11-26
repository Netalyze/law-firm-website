import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  @Output() closeButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeDetails() {
    this.closeButtonClicked.emit();
  }
}
