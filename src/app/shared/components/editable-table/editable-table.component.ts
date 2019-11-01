import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.sass']
})
export class EditableTableComponent implements OnInit {

  @Input()
  items: any

  constructor() { }

  ngOnInit() {
  }

}
