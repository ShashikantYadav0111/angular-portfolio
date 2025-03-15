import { Component } from '@angular/core';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-portfolio',
  imports: [SkillsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  // doNothing(websiteLink:string):void{
  //   window.open(websiteLink, '_blank');
  // }
  quiz_app = [
    {name:"Angular",color:"#DD0031"},
    {name:"Firebase",color:"#FFCA28"},
    {name:"Git",color:"#F05032"},
  ]

  onButtonClick(siteLink: string) {
    window.open(siteLink, '_blank');
  }
}
