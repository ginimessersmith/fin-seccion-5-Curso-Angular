import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

  //? creando la propiedad que va emitir el nuevo caracter en el mainpage
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  //? solo se puede agregar uno por tanto es tipo character, sin array
  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    console.log(this.character)

    if (this.character.name.length === 0) return//? no hacer anda cuando me mande un nombre vacio
    this.onNewCharacter.emit(this.character)

    //? limpiar el form luego del submit (luego de dar Enter)
    // this.character.name = '' aqui resetea el valor por tanto en la lista no aparece anda
    // this.character.power = 0 aqui tambien
    //? solucionando el problema: aqui se cambia la referencia de memoria por tanto se manda al main page lo esperado
    this.character={ name: '', power: 0 }
  }
}
