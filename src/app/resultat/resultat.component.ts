import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resultat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resultat.component.html',
  styleUrl: './resultat.component.css'
})
export class ResultatComponent {
  correctAnswers: number = 0;
totalQuestions: number = 0;
username: string = '';

  saveScore() {
    // logic to save
  }

  restartQuiz() {
    // logic to restart
  }

}
