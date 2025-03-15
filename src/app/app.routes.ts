import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

export const routes: Routes = [
    {path:'', component:IntroductionComponent, pathMatch:'full'},
    {path:'portfolio',component:PortfolioComponent,},
    {path:'contact',component:ContactComponent,},
    {path:'*',redirectTo:''}
];
