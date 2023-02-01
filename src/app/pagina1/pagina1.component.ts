import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {

   n1 = 0;
   n2 = 0;
   op = "op"
   r = 0;
  
   Calcular(){
     if(this.op == '+'){
       this.r = this.n1 + this.n2;
   }else if( this.op == '-'){
       this.r = this.n1 - this.n2;
   }else if(this.op == '*'){
       this.r = this.n1 * this.n2;
   }else if(this.op == '/'){
       this.r = this.n1 / this.n2;
   }
   console.log(this.r)
   }

  // CALCULADORA  DOS
   
  //  numero1:number=0;
  //  numero2:number=0;
  //  resultado:number=0;

  //  sumar():void{
  //    this.resultado = this.numero1+this.numero2;
  //  }
  //  restar():void{
  //    this.resultado = this.numero1-this.numero2;
  //  }
  //  multiplicar():void{
  //    this.resultado = this.numero1*this.numero2;
  //  }
  //  dividir():void{
  //    this.resultado = this.numero1/this.numero2;
  //  }

  //  sumar(numero1: number, numero2: number){
  //   return Number(numero1) + Number(numero2)
  //  }

  //  restar(numero1: number, numero2: number){
  //   return Number(numero1) - Number(numero2)
  //  }
  //  multi(numero1: number, numero2: number){
  //   return Number(numero1) * Number(numero2)
  //  }
  //  dividir(numero1: number, numero2: number){
  //   return Number(numero1) / Number(numero2)
  //  }
}

