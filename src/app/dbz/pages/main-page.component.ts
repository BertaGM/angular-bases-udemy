import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

//ESTE ES EL COMPONENTE MADRE

@Component({
  // el selector siempre tiene que empezar con app-nombre-que-queramos
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  // esto es la inyección de dependencias.
  //Por norma el servicio se hace private, por si acaso se importa el componente a otro lugar
  //quedaría expuesto a cambios no deseados
  constructor(private dbzService: DbzService) {}

  //hacemos métodos getter para poder compartir los métodos de este componente con el exterior
  //pero sin el riesgo de modificaciones no deseadas
  get characters(): Character[] {
    return [...this.dbzService.characters]; //creamos una copia de cada objeto spredeando
    //si el array de objetos viene de una BBDD no es necesario hacer una copia de los objetos
  }

  onDeleteCharacter(id: string): void {
    //cuando reciba un personaje, va a eliminarlo por el id
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
