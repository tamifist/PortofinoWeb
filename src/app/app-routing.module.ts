import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { LanguageOfPulseComponent } from './components/menu/language-of-pulse/language-of-pulse.component';
import { CreatingPulseComponent } from './components/menu/creating-pulse/creating-pulse.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PespondingToPulseWithBeatComponent }
from './components/menu/pesponding-to-pulse-with-beat/pesponding-to-pulse-with-beat.component';
import {PrivacyPolicyComponent} from './components/menu/privacy-policy/privacy-policy.component';
import {TermOfUseComponent} from './components/menu/term-of-use/term-of-use.component';
import {PrivacySettingsComponent} from './components/menu/privacy-settings/privacy-settings.component';
import {ManagingYourAccountComponent} from './components/menu/managing-your-account/managing-your-account.component';
import {PulseForCorporatesComponent} from './components/menu/pulse-for-corporates/pulse-for-corporates.component';
// tslint:disable-next-line:max-line-length
import {FindingYourWayAroundPulseAppComponent} from './components/menu/finding-your-way-around-pulse-app/finding-your-way-around-pulse-app.component';
import {EnjoingLivePulseComponent} from './components/menu/enjoing-live-pulse/enjoing-live-pulse.component';
import {DataAndInsightFromPulsesComponent} from './components/menu/data-and-insight-from-pulses/data-and-insight-from-pulses.component';
import {HomeComponent} from './components/menu/home/home.component';
import {AboutUsComponent} from './components/menu/about-us/about-us.component';


const menuRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'languageOfPulse', component: LanguageOfPulseComponent},
  { path: 'creatingPulse', component: CreatingPulseComponent},
  { path: 'respondingToPulseWithBeat', component: PespondingToPulseWithBeatComponent},
  { path: 'privacyPolicy', component: PrivacyPolicyComponent},
  { path: 'termOfUse', component: TermOfUseComponent},
  { path: 'privacySettings', component: PrivacySettingsComponent},
  { path: 'managingYourAccount', component: ManagingYourAccountComponent},
  { path: 'pulseForCorporates', component: PulseForCorporatesComponent},
  { path: 'enjoyingLivePulse', component: EnjoingLivePulseComponent},
  { path: 'dataAndInsightsFromPulses', component: DataAndInsightFromPulsesComponent},
  { path: 'findingYourWayAroundPulseApp', component: FindingYourWayAroundPulseAppComponent},
  { path: 'aboutUs', component: AboutUsComponent},
];

const routes: Routes = [
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, children: menuRoutes , data: {animation: 'menu'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
