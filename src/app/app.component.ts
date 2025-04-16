import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultatComponent } from './resultat/resultat.component';
import { HistoriqueComponent } from './historique/historique.component';
import { QuizComponent } from './quiz/quiz.component';
import { AccueilComponent } from './accueil/accueil.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ResultatComponent, HistoriqueComponent, QuizComponent, AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Quiz';
}
