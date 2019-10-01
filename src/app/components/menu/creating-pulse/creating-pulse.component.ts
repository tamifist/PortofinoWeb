import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-creating-pulse',
  templateUrl: './creating-pulse.component.html',
  styleUrls: ['./creating-pulse.component.scss'],
  animations: [
    trigger('extended', [
      state('start', style({
        width: '0'
      })),
      state('end', style({
        width: '100%'
      })),
      transition('* => end', animate('5s')
      ),
    ]),
    trigger('narrowing', [
      state('start', style({
        width: '100%'
      })),
      state('end', style({
        width: '0%'
      })),
      transition('* => end', animate('5s')
      ),
    ]),
  ],
})
export class CreatingPulseComponent implements OnInit {
  showAnimation = 'start';

  constructor() {
  }

  ngOnInit() {
    this.showAnimation = 'end';
  }

}
