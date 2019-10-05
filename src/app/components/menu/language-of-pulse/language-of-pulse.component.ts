import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-language-of-pulse',
  templateUrl: './language-of-pulse.component.html',
  styleUrls: ['./language-of-pulse.component.scss']
})
export class LanguageOfPulseComponent implements OnInit {
  isHandset: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe((result) => {
      this.isHandset = result;
    });
  }

  ngOnInit() {

  }

}
