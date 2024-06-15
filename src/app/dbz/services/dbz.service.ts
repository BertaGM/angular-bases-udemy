import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' }) //el servicio va a ser un singleton en toda la aplicación
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vulma',
      power: 100000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    //spredeamos character, para no escribir todas sus propiedades, sobretodo por si se
    //añaden o quitan o odifican el nombre
    //por norma tiene que ir primero el  spred y luego las propiedades que se quieren sobreescribir
    this.characters.push(newCharacter); //añadimos el nuevo personaje al final del array
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
    //filtramos los characters x id, se devuelve un nuevo array con los characters
    //cuyos id's no coincidan con el id recibido
  }
}
