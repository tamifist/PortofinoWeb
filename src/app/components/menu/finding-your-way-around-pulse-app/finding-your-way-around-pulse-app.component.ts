import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from '../../base/base.component';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finding-your-way-around-pulse-app',
  templateUrl: './finding-your-way-around-pulse-app.component.html',
  styleUrls: ['./finding-your-way-around-pulse-app.component.scss']
})
export class FindingYourWayAroundPulseAppComponent extends BaseComponent {
  showNextScreen = true;
  showPreviousScreen = false;
  @ViewChild(NgbCarousel, {static : false }) NgbCarouselElement: NgbCarousel ;

  carouselNext() {
    if (Number(this.NgbCarouselElement.activeId.replace(/\D/g, ''))
      === (Number(this.NgbCarouselElement.slides.last.id.replace(/\D/g, '')) - 1 ) ) {
      this.showNextScreen = false;
    }

    if (this.NgbCarouselElement.activeId === this.NgbCarouselElement.slides.first.id ) {
      this.showPreviousScreen = true;
    }

    this.NgbCarouselElement.next();
  }

  carouselPrevious() {
    if (Number(this.NgbCarouselElement.activeId.replace(/\D/g, ''))
      === (Number(this.NgbCarouselElement.slides.last.id.replace(/\D/g, ''))) ) {
      this.showNextScreen = true;
    }

    if (Number(this.NgbCarouselElement.activeId.replace(/\D/g, '')) - 1
      === (Number(this.NgbCarouselElement.slides.first.id.replace(/\D/g, '')))) {
      this.showPreviousScreen = false;
    }

    this.NgbCarouselElement.prev();
  }
}
