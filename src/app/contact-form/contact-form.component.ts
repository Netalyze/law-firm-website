import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  name: string;
  surename: string;
  contact: string;

  constructor() { }

  ngOnInit(): void {
  }

}
