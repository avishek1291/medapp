import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';

const homeRoutes: Routes = [
    {
        path: '**', component: LandingPageComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
