import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {filter, map, shareReplay} from 'rxjs/operators';
import {NavigationStart, Router} from '@angular/router';
import {BaseComponent} from '../base/base.component';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent extends BaseComponent implements  AfterViewInit {

  isHome: boolean;

  @ViewChild('matnavlist', {static : false }) matnavlist: ElementRef;
  @ViewChild('drawer', {static : false }) sidenav: MatSidenav;

  constructor(public breakpointObserver: BreakpointObserver,
              private render: Renderer2,
              public router: Router) {
    super(breakpointObserver, router);
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.sidenav.close();
    });
  }

  ngAfterViewInit(): void {
    let childrenItems = this.matnavlist.nativeElement.children[0].children;

    for ( let i = 0; i < childrenItems.length ; i++ ) {
      if (this.router.url.match(childrenItems[i].pathname)) {
        this.render.addClass(childrenItems[i].children[0], 'active');
      }
    }

    if (this.router.url.match('/menu/home')) {
      this.isHome = true;
    } else {
      this.isHome = false;
    }

    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event :any) => {
      if (event.url.match('/menu/home')) {
        this.isHome = true;
      } else {
        this.isHome = false;
      }

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
