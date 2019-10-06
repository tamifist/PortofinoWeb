import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-managing-your-account',
  templateUrl: './managing-your-account.component.html',
  styleUrls: ['./managing-your-account.component.scss']
})
export class ManagingYourAccountComponent implements OnInit {
  isHandset: boolean;
  showNextScreen = true;
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
  }

  carouselNext() {
    if (Number(this.NgbCarouselElement.activeId.replace(/\D/g, ''))
      === (Number(this.NgbCarouselElement.slides.last.id.replace(/\D/g, '')) - 1 ) ) {
      this.showNextScreen = false;
    }

    this.NgbCarouselElement.next();
  }

}
