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


const menuRoutes: Routes = [
  { path: 'languageOfPulse', component: LanguageOfPulseComponent},
  { path: 'creatingPulse', component: CreatingPulseComponent},
  { path: 'respondingToPulseWithBeat', component: PespondingToPulseWithBeatComponent},
  { path: 'privacyPolicy', component: PrivacyPolicyComponent},
  { path: 'termOfUse', component: TermOfUseComponent},
];

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, children: menuRoutes , data: {animation: 'menu'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
