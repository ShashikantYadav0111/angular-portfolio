import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [ButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  sectionTitle:string = 'About Me';
  introductionText:string="Learn More";
  aboutMeParagraph1:string="I’m a software developer who loves problem-solving. Chess sharpens my strategy, while reading broadens my knowledge and fuels creativity.";
  aboutMeParagraph2:string="Books offer fresh perspectives, enhancing my coding approach. Chess teaches patience and logic, helping me tackle complex programming challenges effectively.";
  aboutMeParagraph3:string="Strategic thinking from chess and continuous learning from books shape my development skills, enabling me to build efficient and scalable solutions.";

  buttonText:string='View Projects'

  constructor(public router:Router){}

  navigate():void{
    this.router.navigate(['/portfolio'])
  }
}
