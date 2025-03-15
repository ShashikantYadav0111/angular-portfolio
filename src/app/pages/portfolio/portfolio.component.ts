import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  // doNothing(websiteLink:string):void{
  //   window.open(websiteLink, '_blank');
  // }

  onButtonClick(siteLink: string) {
    window.open(siteLink, '_blank');
  }
}
