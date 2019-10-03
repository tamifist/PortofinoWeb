import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animate, group, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('RouteAnimation', [
      transition('menu <=> startPage', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
            left: 0
          } ),
          ], { optional: true }),
          query(':enter', [
            style({ top : '100%' })
          ]),
          group([
            query(':leave', [
              animate('600ms ease', style({ top: '-100%'}))
            ],{ optional: true }),
            query(':enter', [
              animate('600ms ease', style({ top: '0%'}))
            ],{ optional: true })
          ]),
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
