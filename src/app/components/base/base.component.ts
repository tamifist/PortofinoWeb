import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Component} from '@angular/core';

@Component({
  template: ''
})
export class BaseComponent {
  isHandset: boolean;

  constructor(protected  breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe((result) => {
      this.isHandset = result;
    });
  }
}
