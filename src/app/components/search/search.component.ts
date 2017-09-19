import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSearch($event): void {

    console.log($event.target.value);
  }
}
