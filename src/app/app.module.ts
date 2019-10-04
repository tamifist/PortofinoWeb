import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreatingPulseComponent } from './components/menu/creating-pulse/creating-pulse.component';
import { LanguageOfPulseComponent } from './components/menu/language-of-pulse/language-of-pulse.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StartPageComponent } from './components/start-page/start-page.component';
import { PespondingToPulseWithBeatComponent } from './components/menu/pesponding-to-pulse-with-beat/pesponding-to-pulse-with-beat.component';
import { PrivacyPolicyComponent } from './components/menu/privacy-policy/privacy-policy.component';
import { TermOfUseComponent } from './components/menu/term-of-use/term-of-use.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainNavComponent,
    LanguageOfPulseComponent,
    CreatingPulseComponent,
    StartPageComponent,
    PespondingToPulseWithBeatComponent,
    PrivacyPolicyComponent,
    TermOfUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
