import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.sass']
})
export class NotificationMessageComponent implements OnInit {

  @Input()
  message: String;

  constructor() { }

  ngOnInit() {
  }

}
