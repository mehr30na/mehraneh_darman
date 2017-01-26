import {Component, Input} from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <div class="loading" *ngIf="visible">
     <i class="fa fa-spinner fa-pulse fa-5x fa-fw spinner"></i>
        </div>

    `
})

export class SpinnerComponent {
  @Input() visible = true;
}
