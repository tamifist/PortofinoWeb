import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { LanguageOfPulseComponent } from './components/menu/language-of-pulse/language-of-pulse.component';
import { CreatingPulseComponent } from './components/menu/creating-pulse/creating-pulse.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const menuRoutes: Routes = [
  { path: 'languageOfPulse', component: LanguageOfPulseComponent},
  { path: 'creatingPulse', component: CreatingPulseComponent},
];

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, children: menuRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
