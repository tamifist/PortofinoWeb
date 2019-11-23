import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends BaseComponent implements OnInit {

  navigate(url) {
    this.router.navigate([url]);
    try {
      document.querySelector('#bottom').scrollIntoView();
    } catch (e) { }
  }

  ngOnInit() {
  }

}
