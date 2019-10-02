import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creating-pulse',
  templateUrl: './creating-pulse.component.html',
  styleUrls: ['./creating-pulse.component.scss'],
  animations: [
    trigger('extended', [
      state('start', style({
        width: '0'
      })),
      state('end', style({
        width: '100%'
      })),
      transition('* => end', [ animate('2s') ]),
      transition('* => start', [ animate('0s')],
    ),
    ]),
    trigger('narrowing', [
      state('start', style({
        width: '100%'
      })),
      state('end', style({
        width: '0%'
      })),
      transition('* => end', [ animate('2s') ]),
      transition('* => start', [ animate('0s')],
      ),
    ]),
  ],
})
export class CreatingPulseComponent implements OnInit  {
  showAnimation = 'start';
  isHandset: boolean;
  @ViewChild(NgbCarousel, {static : false }) NgbCarouselElement: NgbCarousel ;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe((result) => {
      this.isHandset = result;
    });
  }

  ngOnInit() {
    this.showAnimation = 'end';
  }

  carouselNext() {
    this.showAnimation = 'start';

    // tslint:disable-next-line:no-conditional-assignment
    if(this.NgbCarouselElement.activeId === 'ngb-slide-3') {
     this.router.navigate(['menu/languageOfPulse']);
     return;
   }

    this.NgbCarouselElement.next();

    setTimeout(() => {
     this.showAnimation = 'end';
   });
  }
}
