import { Component, Input } from '@angular/core';
import { CalcActionsComponent } from "../calc-actions/calc-actions.component";
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent, FormsModule],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  valor1 : number=0;
  valor2: number=0;
  resultado : number | boolean = 0;


  onvalor1changed(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valor1 = parseFloat(target.value);
  }
  onvalor2changed(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valor2 = parseFloat(target.value);
  }
  onselected(res: number | boolean) {
    	this.resultado = res;
      if( res == true){
        this.valor1 = 0;
        this.valor2 = 0;
        this.resultado = 0;
      }
  }
}
