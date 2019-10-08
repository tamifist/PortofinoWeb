import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: ''
})
export class BaseComponent {
  protected isHandset: boolean;

  constructor(protected  breakpointObserver: BreakpointObserver, public router: Router) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe((result) => {
      this.isHandset = result;
    });
  }
}
