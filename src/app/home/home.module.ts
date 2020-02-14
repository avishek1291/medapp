import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeRoutingModule } from './home-routing.module';

import {ToolbarModule} from 'primeng/toolbar';

import {ButtonModule} from 'primeng/button';

import {SplitButtonModule} from 'primeng/splitbutton';
@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule
  ],
  exports: [LandingPageComponent]
})
export class HomeModule { }
