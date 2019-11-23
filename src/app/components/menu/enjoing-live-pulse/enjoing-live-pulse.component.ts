import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {BaseComponent} from '../../base/base.component';

@Component({
  selector: 'app-enjoing-live-pulse',
  templateUrl: './enjoing-live-pulse.component.html',
  styleUrls: ['./enjoing-live-pulse.component.scss'],
  animations: [
    trigger('extended', [
      state('start', style({
        width: '0'
      })),
      state('end', style({
        width: '100%'
      })),
      transition('* => end', [ animate('1s') ]),
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
      transition('* => end', [ animate('1s') ]),
      transition('* => start', [ animate('0s')],
      ),
    ]),
  ],
})
export class EnjoingLivePulseComponent extends BaseComponent implements OnInit {
  showAnimation = 'start';
  showNextScreen = true;
  showPreviousScreen = false;
  @ViewChild(NgbCarousel, {static : false }) NgbCarouselElement: NgbCarousel ;

  ngOnInit() {
    this.showAnimation = 'end';
  }

  carouselNext() {
    this.showAnimation = 'start';

    if (Number(this.NgbCarouselElement.activeId.replace(/\D/g, ''))
      === (Number(this.NgbCarouselElement.slides.last.id.replace(/\D/g, '')) - 1 ) ) {
      this.showNextScreen = false;
    }

    if (this.NgbCarouselElement.activeId === this.NgbCarouselElement.slides.first.id ) {
      this.showPreviousScreen = true;
    }

    this.NgbCarouselElement.next();

    setTimeout(() => {
      this.showAnimation = 'end';
    });
  }

  carouselPrevious() {
    this.showAnimation = 'start';

    if (Number(this.NgbCarouselElement.activeId.replace(/\D/g, ''))
      === (Number(this.NgbCarouselElement.slides.last.id.replace(/\D/g, ''))) ) {
      this.showNextScreen = true;
    }

    // tslint:disable-next-line:no-conditional-assignment
    if (Number(this.NgbCarouselElement.activeId.replace(/\D/g, '')) - 1
      === (Number(this.NgbCarouselElement.slides.first.id.replace(/\D/g, '')))) {
      this.showPreviousScreen = false;
    }

    this.NgbCarouselElement.prev();

    setTimeout(() => {
      this.showAnimation = 'end';
    });
  }

}
