import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {
    @Input() val1: number=0;
    @Input() val2: number=0;
    @Output() res = new EventEmitter<number |  boolean  >();


    suma() {
        this.res.emit(this.val1 + this.val2);
    } 
    resta() {
        
        this.res.emit(this.val1 - this.val2)
    }
    multiplicacion() {


        this.res.emit(this.val1 * this.val2)
    }
    division() {

        this.res.emit(this.val1 / this.val2)
    }
    potencia() {
 
        this.res.emit(Math.pow(this.val1, this.val2))
    }
    limpiar() {
        this.val1 = 0;
        this.val2 = 0;
        this.res.emit(true)
        
    }
    
}
