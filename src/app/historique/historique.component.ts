import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
  scores: any[] = []; // Or the appropriate type for 'scores'

  constructor() {
    // Populate the scores array as needed
  }
  deleteScore(score: any) {
    // your delete logic here
  }
}
