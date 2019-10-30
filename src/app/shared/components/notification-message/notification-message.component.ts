import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.sass']
})
export class NotificationMessageComponent implements OnInit {

  @Input()
  title: String;

  @Input()
  message: String;

  @Input()
  alert: String;

  constructor() { }

  ngOnInit() {
    console.log(this.alert);
    console.log(this.message);
  }

}
