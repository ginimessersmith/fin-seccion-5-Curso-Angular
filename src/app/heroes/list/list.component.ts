import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroName:string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor']
  public heroeEliminado?:string//opcional ?
  eliminarUltimoHero():void{
    // let heroeEliminado:string | undefined=''
    this.heroeEliminado=this.heroName.pop()//eliminar y retornar el ultimo elemento
    console.log(this.heroeEliminado)
  }
}
