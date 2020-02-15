import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';

import { HomeComponent } from './home.component';
@NgModule({
  declarations: [ProductCardsComponent, LandingPageComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeRoutingModule,
    CarouselModule,
    ButtonModule
  ]
})
export class HomeModule { }
