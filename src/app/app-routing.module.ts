import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeftCardComponent } from './left-card/left-card.component';
import { MidCardComponent } from './mid-card/mid-card.component';
import { RightCardComponent } from './right-card/right-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'wypadki-drogowe', component: LeftCardComponent},
  { path: 'sprawy-rozwodowe', component: MidCardComponent},
  { path: 'prawo-karne', component: RightCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
