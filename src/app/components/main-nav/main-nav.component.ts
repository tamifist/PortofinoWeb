import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {filter, map, shareReplay} from 'rxjs/operators';
import {NavigationStart, Router} from '@angular/router';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent extends BaseComponent implements  AfterViewInit {

  @ViewChild('matnavlist', {static : false }) matnavlist: ElementRef ;

  constructor(public breakpointObserver: BreakpointObserver,
              private render: Renderer2,
              public router: Router) {
    super(breakpointObserver, router);
  }

  ngAfterViewInit(): void {

    let childrenItems = this.matnavlist.nativeElement.children[0].children;

    for ( let i = 0; i < childrenItems.length ; i++ ) {
      if (this.router.url.match(childrenItems[i].pathname)) {
        this.render.addClass(childrenItems[i].children[0], 'active');
      }
    }

    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event :any) => {
      for ( let i = 0; i < childrenItems.length ; i++ ) {
        this.render.removeClass(childrenItems[i].children[0], 'active');
      }

      for ( let i = 0; i < childrenItems.length ; i++ ) {
        if (childrenItems[i].href.toString().match(event.url)) {
          this.render.addClass(childrenItems[i].children[0], 'active');
        }
      }
    });
  }
}
