import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultatComponent } from './resultat/resultat.component';
import { HistoriqueComponent } from './historique/historique.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultatComponent },
  { path: 'historique', component: HistoriqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
