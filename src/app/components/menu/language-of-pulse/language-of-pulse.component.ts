import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {BaseComponent} from '../../base/base.component';

@Component({
  selector: 'app-language-of-pulse',
  templateUrl: './language-of-pulse.component.html',
  styleUrls: ['./language-of-pulse.component.scss']
})
export class LanguageOfPulseComponent extends BaseComponent {
}
