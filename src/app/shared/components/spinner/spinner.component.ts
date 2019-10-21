import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.spinnerService.isLoading;
  constructor(private spinnerService: SpinnerService){}

}
