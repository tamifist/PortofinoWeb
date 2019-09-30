import {Component, Renderer2} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  isHandset: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
              private render: Renderer2) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe((result) => {
     this.isHandset = result;
    });
  }

  changeClassForMenu(event) {
    // clear class active from another elements
    event.currentTarget.childNodes.forEach((currentValue, index, array) => {
      this.render.removeClass(currentValue.childNodes[0], 'active');
    });

    this.render.addClass(event.target, 'active');
  }

}
