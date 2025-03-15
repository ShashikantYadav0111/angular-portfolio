import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  imports: [ButtonComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  greetingText:string = 'Hello! My name is';
  fullName:string='Shashikant Yadav';
  roleText:string='I build software solutions';
  introductionText:string='I am software developer learing to build websites!';

  aboutMeButtonText:string="About Me";
  constructor(public router:Router){}

  navigate():void{
    this.router.navigate(['/about-me']);
  }
}
