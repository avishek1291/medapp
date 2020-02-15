import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell-ui/ui-shell.component';
import { CoreRoutingModule } from './core.router.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers: [

  ],
  declarations: [HeaderComponent, ShellComponent]
})
export class CoreModule {
  constructor() {}
}
