import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'
@Injectable({
  providedIn: 'root',
})
export class DbzService {

  //?public characters:any[] =[]; procurar eviatar any, para ello se crea una interface que sera definida por el character
  //? arreglo de caracteres: (objeto por referencia)
  public characters: Character[] = [{
    id: uuid(),
    name: 'krilin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'goku',
    power: 9000
  },
  {
    id: uuid(),
    name: 'vegeta',
    power: 7500
  }]

  //? agregando el nuevo caracter recibido desde el onNewCharacter

  addCharacter(character: Character): void {
    // console.log('main page')
    // console.log(character)
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }
    //? esparcion de los datos para no insertar cada uno
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter)
  }

  deleteCharacter(id: string): void {
    // this.characters.splice(index, 1)
    //? retorna una nueva lista con la condicion (character => character.id !== id), osea toda la lista menos el elemento donde el id no coincida
    this.characters = this.characters.filter(character => character.id !== id)
  }


}
