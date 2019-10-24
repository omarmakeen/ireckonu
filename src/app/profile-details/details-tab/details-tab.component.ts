import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-tab',
  templateUrl: './details-tab.component.html',
  styleUrls: ['./details-tab.component.sass']
})
export class DetailsTabComponent implements OnInit {


  @Input()
  profileDetails

  constructor() { }

  ngOnInit() {
  }

}
