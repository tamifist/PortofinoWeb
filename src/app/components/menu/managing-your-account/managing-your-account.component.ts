import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {BaseComponent} from '../../base/base.component';

@Component({
  selector: 'app-managing-your-account',
  templateUrl: './managing-your-account.component.html',
  styleUrls: ['./managing-your-account.component.scss']
})
export class ManagingYourAccountComponent extends BaseComponent implements OnInit {
  showNextScreen = true;
  @ViewChild(NgbCarousel, {static : false }) NgbCarouselElement: NgbCarousel ;

  // constructor(protected breakpointObserver: BreakpointObserver) {
  //   super(breakpointObserver);
  // }

  ngOnInit() {
  }

  carouselNext() {
    if (Number(this.NgbCarouselElement.activeId.replace(/\D/g, ''))
      === (Number(this.NgbCarouselElement.slides.last.id.replace(/\D/g, '')) - 1 ) ) {
      this.showNextScreen = false;
    }

    this.NgbCarouselElement.next();
  }

}
