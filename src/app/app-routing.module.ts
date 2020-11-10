import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardSubpageComponent } from './card-subpage/card-subpage.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: ':link', component: CardSubpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
