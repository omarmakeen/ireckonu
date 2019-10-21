import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class SpinnerService {

  isLoading = new Subject<boolean>();
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
}
