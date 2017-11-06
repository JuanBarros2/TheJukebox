import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  @Output() onQuery = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchQuery(query: string) {
    this.onQuery.emit({query});
  }

}
