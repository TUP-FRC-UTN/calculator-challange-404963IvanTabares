import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcViewComponent } from "./calc-view/calc-view.component";
import { CalcActionsComponent } from "./calc-actions/calc-actions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcViewComponent, CalcActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';


  
}
