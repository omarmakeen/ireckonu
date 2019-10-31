import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, of, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, flatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnDestroy  {

  private subscription: Subscription;
  public keyUp = new Subject<any>();

  @Output() searchText: EventEmitter<string> = new EventEmitter<string>()

  constructor() {
    const subscription = this.keyUp.pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged(),
      flatMap(search => of(search).pipe(delay(500)))
    ).subscribe(search => this.searchClick(search));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchClick(text: string) {
    this.searchText.emit(text);
  }
}
