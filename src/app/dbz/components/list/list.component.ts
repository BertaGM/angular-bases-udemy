import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  //@Input() es el decorador que necesitamos para que la hija pueda recibir datos de la madre
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    },
  ];

  @Output()
  //Creamos una instancia de un evento (un id o posición en este caso)
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;

    this.onDelete.emit(id); //aquí emitimos el evento creado en la línea 21
  }
}
