import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeftCardComponent } from './left-card/left-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'wypadki-drogowe', component: LeftCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
