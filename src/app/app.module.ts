import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenubarComponent } from './top-menubar/top-menubar.component';
import {ToastModule} from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { LeftCardComponent } from './left-card/left-card.component';
import { MidCardComponent } from './mid-card/mid-card.component';
import { RightCardComponent } from './right-card/right-card.component';
import { FooterComponent } from './footer/footer.component';
import { WorkOffersComponent } from './work-offers/work-offers.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartModule } from 'primeng/chart';
import { AgmCoreModule } from '@agm/core';
import { OffersListComponent } from './offers-list/offers-list.component';
import { DataViewModule } from 'primeng/dataview';
import { AwardComponent } from './award/award.component';
import { AwardsComponent } from './awards/awards.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FooterComponent,
    WorkOffersComponent,
    ChartsComponent,
    OffersListComponent,
    AwardComponent,
    AwardsComponent,
    HomeFooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    ChartModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-16wLkXXtESzJd5b_2hzqcwb1oUav_aQ'
    }),
    DataViewModule,
    FormsModule,
    KeyFilterModule,
    RadioButtonModule,
    InputTextareaModule,
    InputTextModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
