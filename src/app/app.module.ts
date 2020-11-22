import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenubarComponent } from './top-menubar/top-menubar.component';

import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { LeftCardComponent } from './left-card/left-card.component';
import { MidCardComponent } from './mid-card/mid-card.component';
import { RightCardComponent } from './right-card/right-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenubarComponent,
    BannerComponent,
    HomeComponent,
    CardComponent,
    CardListComponent,
    LeftCardComponent,
    MidCardComponent,
    RightCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
