import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  //El decorador Output sirve para que las hijas le pueden enviar info a la madre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //EventEmiter es un genérico <T>

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    //controlamos que siempre escriban algo en el input de name, que no lo dejen vacío
    //no hacemos lo mismo con power, porqué se puede dar el caso de que no tengan power
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
