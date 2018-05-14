import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {
  }

  ngOnInit() {
    console.log("ContactDetailsComponent.ngOnInit");
  }

  ngOnDestroy() {
    console.log("ContactDetailsComponent.ngOnDestroy");
  }

}

export interface Contact {
  id: number;
  name: string;
}
