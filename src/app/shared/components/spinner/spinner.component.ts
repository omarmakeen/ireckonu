import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { SPINNER_CONFIG } from '../../constants/defines';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent {

  color = SPINNER_CONFIG.COLOR;
  mode = SPINNER_CONFIG.MODE;
  value = SPINNER_CONFIG.VALUE;
  isLoading: Subject<boolean> = this.spinnerService.isLoading;
  constructor(private spinnerService: SpinnerService) { }

}
