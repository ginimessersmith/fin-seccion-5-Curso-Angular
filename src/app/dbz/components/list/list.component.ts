import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent {
  //? para recibir algo del mundo exterior (en este caso la lista de mainpage), se hace con el @Input
  @Input()//? esta lista (characterList) es actualizada con lo que se manda desde el main
  public characterList: Character[] = [{
    //? valor por defecto
    name: 'trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string): void {
    if (!id) return//?no hacer anda si no viene el id

    this.onDelete.emit(id)
  }

}
