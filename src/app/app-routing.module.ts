import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeftCardComponent } from './left-card/left-card.component';
import { MidCardComponent } from './mid-card/mid-card.component';
import { RightCardComponent } from './right-card/right-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'left-card', component: LeftCardComponent},
  { path: 'mid-card', component: MidCardComponent},
  { path: 'right-card', component: RightCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
