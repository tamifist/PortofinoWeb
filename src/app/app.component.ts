import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animate, group, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('RouteAnimation', [
      transition('* => menu', [
        transition(':enter', [
          style({transform: 'translateY(-100%)'}),
          animate('200ms ease-in', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
          animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
        ])
      ])
      ])
  ]
})
export class AppComponent {
  title = 'PortofineWeb';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
