import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-tab',
  templateUrl: './details-tab.component.html',
  styleUrls: ['./details-tab.component.sass']
})
export class DetailsTabComponent implements OnInit {

  tiles = [
    {text: 'Tile 1', cols: 2, rows: 1 ,border: '3px double purple'},
    {text: 'Tile 2', cols: 2, rows: 1 ,border: '3px double red'},
    {text: 'Tile 3', cols: 2, rows: 1 ,border: '3px double skyblue'},
    {text: 'Tile 4', cols: 2, rows: 1 ,border: '3px double yellow'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
