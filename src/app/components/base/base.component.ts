import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: ''
})
export class BaseComponent {
  public isHandset: boolean;

  constructor(public  breakpointObserver: BreakpointObserver, public router: Router) {
    this.breakpointObserver.observe([Breakpoints.Handset]) // , Breakpoints.Tablet
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe((result) => {
      this.isHandset = result;
    });
  }

  navigate(url) {
    this.router.navigate([url]);
    // try {
    //   document.querySelector('#bottom').scrollIntoView();
    // } catch (e) { }
  }
}
