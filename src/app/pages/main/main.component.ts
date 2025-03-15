import { Component } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
  selector: 'app-main',
  imports: [
    IntroductionComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
