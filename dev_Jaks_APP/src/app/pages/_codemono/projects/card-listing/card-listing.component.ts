import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: ['./card-listing.component.scss']
})
export class CardListingComponent implements OnInit {
  //  Pagination
  page = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
