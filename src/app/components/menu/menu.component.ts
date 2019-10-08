import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isHandset: boolean;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe((result) => {
      this.isHandset = result;
    });
  }

  navigate(url) {
    this.router.navigate([url]);
    try {
      document.querySelector('#bottom').scrollIntoView();
    } catch (e) { }
  }

  ngOnInit() {
  }

}
