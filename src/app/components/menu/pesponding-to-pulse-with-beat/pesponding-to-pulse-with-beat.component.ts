import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {map, shareReplay} from 'rxjs/operators';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-pesponding-to-pulse-with-beat',
  templateUrl: './pesponding-to-pulse-with-beat.component.html',
  styleUrls: ['./pesponding-to-pulse-with-beat.component.scss'],
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
export class PespondingToPulseWithBeatComponent implements OnInit {
  isHandset: boolean;
  showAnimation = 'start';
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
    if (this.NgbCarouselElement.activeId === 'ngb-slide-3' && !this.isHandset) {
      this.router.navigate(['menu/respondingToPulseWithBeat']);
      return;
    }

    if (this.NgbCarouselElement.activeId === 'ngb-slide-6' && this.isHandset) {
      this.router.navigate(['menu/respondingToPulseWithBeat']);
      return;
    }

    this.NgbCarouselElement.next();

    setTimeout(() => {
      this.showAnimation = 'end';
    });
  }
}
