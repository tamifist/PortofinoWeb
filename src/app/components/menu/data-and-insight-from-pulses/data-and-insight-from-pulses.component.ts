import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-data-and-insight-from-pulses',
  templateUrl: './data-and-insight-from-pulses.component.html',
  styleUrls: ['./data-and-insight-from-pulses.component.scss']
})
export class DataAndInsightFromPulsesComponent implements OnInit {

  showAnimation = 'start';
  isHandset: boolean;
  showNextScreen = true;
  showPreviousScreen = false;
  @ViewChild(NgbCarousel, {static : false }) NgbCarouselElement: NgbCarousel ;

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
