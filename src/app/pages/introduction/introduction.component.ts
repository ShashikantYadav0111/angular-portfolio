import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from "../../components/skills/skills.component";

@Component({
  selector: 'app-introduction',
  imports: [CommonModule, SkillsComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  greetingText:string = 'Hello! My name is';
  fullName:string='Shashikant Yadav';
  roleText:string='Java Fullstack Developer';
  introductionText:string='I am software developer learing to build websites!';

  skills=[
    {name:"Java",color:"#EA2D2E"},
    {name:"SpringBoot",color:"#6DB33F"},
    {name:"Security",color:"#00A4D3"},
    {name:"Angular",color:"#DD0031"},
    {name:"NodeJs",color:"#8CC84B"},
    {name:"ExpressJs",color:"white"},
    {name:"MySQL",color:"#00758F"},
    {name:"MongoDb",color:"#47A248"},
    {name:"Docker",color:"#2496ED"},
    {name:"Git",color:"#F05032"},
    {name:"React",color:"#61DAFB"},
    {name:"Firebase",color:"#FFCA28"},
    {name:"Jira",color:"#0052CC"},
    {name:"Agile",color:"#2F7E89"},
    {name:"AWS",color:"#CC741F"},
    {name:"Postman",color:"#FF6C37"},
    {name:"Kubernetes",color:"#326CE5"},
    
  ]
  aboutMeButtonText:string="About Me";
  constructor(public router:Router){}

  navigate():void{
    this.router.navigate(['/about-me']);
  }
}
