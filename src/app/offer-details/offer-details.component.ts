import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit, OnChanges {

  @Output() closeButtonClicked = new EventEmitter();
  @Input() selectedOffer;

  constructor(private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentValue'] != undefined) {
      this.selectedOffer = changes['currentValue'];
    }
  }

  ngOnInit(): void {
  }

  closeDetails() {
    this.closeButtonClicked.emit();
    this.router.navigate(['/oferty-pracy']);
  }
}
