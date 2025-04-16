import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  currentQuestionIndex = 0;
  totalQuestions = 10;
  currentQuestion = { question: '', options: [] };
  score = 0;
  progress = 0;

  answerQuestion(option: string) {
    // logic here
  }
}

