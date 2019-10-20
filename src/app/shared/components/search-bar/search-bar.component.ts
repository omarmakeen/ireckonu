import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchComponent } from 'src/app/profile/search/search.component';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
  providers: [SearchBarService]
})
export class SearchBarComponent implements OnInit {
  
  @Output() searchText: EventEmitter<string> = new EventEmitter<string>()

  constructor(private searchBarService: SearchBarService) { }

  ngOnInit() {
  }

  searchClick(text: string) {
    this.searchText.emit(text);
  }
}
