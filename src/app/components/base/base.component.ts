import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: ''
})
export class BaseComponent {
  public isHandset: boolean;
  public isHandsetLandscape: boolean;

  constructor(public  breakpointObserver: BreakpointObserver, public router: Router) {
    this.breakpointObserver.observe([Breakpoints.Handset]) // , Breakpoints.Tablet
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe((result) => {
      this.isHandset = result;
    });

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      // Breakpoints.Handset
    ]).subscribe(result => {
      this.isHandsetLandscape = result.matches;
    });
  }

  navigate(url) {
    this.router.navigate([url]);
    // try {
    //   document.querySelector('#bottom').scrollIntoView();
    // } catch (e) { }
  }
}
